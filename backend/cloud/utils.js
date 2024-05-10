const useMasterKey = { useMasterKey: true };

const checkExists = (value, name) => {
    if (!value) {
        throw new Error(name + ' is required');
    }
}

const isNew = (req) => {
    if (req.original) return false
    return true
}

const userCheck = (req) => {
    if (!req.user) throw new Error('Unauthorized')
}

const isAdmin = async (req) => {
    const { user } = req
    const query = new Parse.Query(Parse.Role)
    query.equalTo('users', user)
    query.equalTo('name', 'admin')
    const data = await query.first(useMasterKey)
    return !!data
}

const useSessionToken = user => {
    return {
        sessionToken: user.getSessionToken(),
    };
};

module.exports = {
    checkExists,
    isNew,
    userCheck,
    isAdmin,
    useMasterKey,
    useSessionToken,
}