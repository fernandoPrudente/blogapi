import * as winston from 'winston';

export  class Logger{

    static constructor(){
        Logger.config();
    }

    static warn(message) {  
        winston.warn(message);
    }

    static info(message) {
        winston.info(message);
    }

    static error(message, error) {
        winston.error(message, error);
    }

    static config() {
        if(process.env.NODE_ENV === 'production')
        {
            winston.remove(winston.transports.Console);
            winston.add(winston.transports.File, {filename: './logs/logfile.log', level: "error"});
        }
    }
}