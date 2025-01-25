class AppError extends Error{
    constructor(message,statusCode){
        super(message);
        this.messageCode = statusCode;
        this.explanation = message;
    }
}
module.exports = AppError;