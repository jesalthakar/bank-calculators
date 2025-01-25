const isManagerMiddleWare = (req, res, next) => {
    console.log(req.user)
    if (req.user.role != "manager") {
        return res.status(403).json({ message: "Access Denied" })
    }
    next();
}

const requireRole = (roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: "Access Denied" })
    }
}

module.exports = { isManagerMiddleWare, requireRole }