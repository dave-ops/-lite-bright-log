declare module 'lite-bright' {
    export interface ILogLevel {
        name: string;
        priority: number;
        abbreviation: string;
    
        formatMessage(msg: string | object | Error): string;
        shouldLog(minimumPriority: number): boolean;
    }

    interface ILogLevelInterface {
    formatMessage(message: string | Error): string;
}

type Formatter = (message: string | Error) => string;

export interface ILogger {
    _env: string;
    _minimumLevel: ILogLevel;
    levels: {
        debug: ILogLevelInterface;
        info: ILogLevelInterface;
        warn: ILogLevelInterface;
        error: ILogLevelInterface;
        critical: ILogLevelInterface;
    };

    get env(): string;
    get minimumLevel(): ILogLevel;
    get level(): ILogLevel;

    set level(level: ILogLevel);

    toLevel(levelNumber: number): ILogLevelInterface;
    log(logLevel: ILogLevelInterface, message: string | Error, formatter?: Formatter): void;
    timestamp(): void;
    debug(message: string | Error): void;
    info(message: string | Error): void;
    warn(message: string | Error): void;
    error(message: string | Error, err?: Error): void;
    critical(message: string | Error, err?: Error): void;
}
}
