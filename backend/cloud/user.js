Parse.Cloud.beforeSave(Parse.User, function (request, response) {
    var user = request.object;
    if (user.isNew()) {
        const acl = new Parse.ACL();
        acl.setPublicReadAccess(false);
        acl.setPublicWriteAccess(false);
        user.setACL(acl);
    }
});