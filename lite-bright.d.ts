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

// Interface for a formatter function
type Formatter = (message: string | Error) => string;

// Main Logger interface
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

    // Getters
    get env(): string;
    get minimumLevel(): ILogLevel;
    get level(): ILogLevel;

    // Setter
    set level(level: ILogLevel);

    // Methods
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
