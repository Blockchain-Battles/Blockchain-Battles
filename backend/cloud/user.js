
const jwt = require('jsonwebtoken');
const { checkExists, useMasterKey } = require('./utils');

Parse.Cloud.beforeSave(Parse.User, function (request, response) {
    var user = request.object;
    if (user.isNew()) {
        const acl = new Parse.ACL();
        acl.setPublicReadAccess(false);
        acl.setPublicWriteAccess(false);
        user.setACL(acl);
    }
});

Parse.Cloud.define("google-login", async (req) => {
    const { params } = req;
    const { id_token } = params;
    checkExists(id_token, 'id_token')

    // Decode the token (without verification), if verification is needed it can be done by using the Google's API or with secret keys
    const decoded = jwt.decode(id_token);
    const { sub: id, email, picture, given_name, family_name } = decoded;
    try {
        const session = await Parse.User.logInWith('google', {
            authData: {
                id,  // googleId,
                id_token
            },
        });

        const user = await new Parse.Query(Parse.User).get(session.id, useMasterKey);
        const avatar = new Parse.File('avatar', { uri: picture });
        await avatar.save(useMasterKey)
        user.setEmail(email);
        user.set("firstname", given_name);
        user.set("lastname", family_name);
        user.set("avatar", avatar);
        await user.save(null, useMasterKey);
        return session;
    } catch (e) {
        console.log(e);
        return e
    }
});
