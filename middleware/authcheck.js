module.exports = {
    ensureAuth:(req,res,next) =>{
        console.log(req.isAuthenticated());
        if(req.isAuthenticated()){
            return next();
        }else{
            res.redirect('/login')
        }
    },
    ensureGuest: (req,res,next) =>{
        if(req.isAuthenticated()){
            res.redirect('/index')
        }else{
            return next()
        }
    }
}