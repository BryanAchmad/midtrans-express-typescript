import winston from 'winston'
import 'winston-daily-rotate-file'

const transport = new winston.transports.DailyRotateFile({
    filename: 'logs/app-%DATES%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '1m',
    maxFiles: '14d',
    level: 'error',
    handleExceptions: true
})

export const logger = winston.createLogger({
    level: 'silly',
    format: winston.format.combine(
        winston.format.json({ space: 4 }),
        winston.format.timestamp({
            format: 'YYYY=MM-DD hh:mm:ss.SSS A'
        }),
        winston.format.label({ label: '[LOGGER]' })
    ),
    transports: [
        new winston.transports.Console({
            level: 'silly',
            handleExceptions: true,
            format: winston.format.combine(
                winston.format.colorize({ all: true })
            )
        }),
        transport
    ],
    exitOnError: false
})
