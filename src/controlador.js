const transportador = require('./email');

const envio = async (req, res) => {
    try {
        const {nome, email, mensagem, assunto} = req.body;

    if(!nome){
        return res.status(400).json({mensagem: 'Se identifique!'})
    }

    if(!email){
        return res.status(400).json({mensagem: 'Precisa informar o email!'})
    }

    if(!mensagem){
        return res.status(400).json({mensagem: 'Escreva sua mensagem!'})
    }

    if(!assunto){
        return res.status(400).json({mensagem: 'Informe o assunto!'})
    }

    transportador.sendMail({
        from: `${nome} <${email}>`,
        to: '"Rodrigo Natan " <dahoradev10@gmail.com>',
        subject: assunto,
        text: mensagem
    })

    return res.status(200).json({mensagem: 'Email enviado com sucesso!'});

    } catch (error) {
        return res.json(error)
    }
}

module.exports = envio;