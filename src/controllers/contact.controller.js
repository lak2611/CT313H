exports.create = (req,res) => {
    return res.send({message: 'create handler'});
}

exports.findAll = (req,res) => {
    return res.send({message: 'findAll handler'});
}

exports.findOne = (req, res) => {
    return res.send({message: 'findOne handler'})
}

exports.update = (req, res) => {
    return res.send({message: 'update handler'});
}

