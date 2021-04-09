import { ticksPerWeek, ticksPerHour } from '@technobuddha/library/constants';

type Settings = {
    login: boolean;
    forgotPassword: boolean;
    signUp: boolean;
    session: {
        duration: number;
        cookieAge: number;
        keepAlive: number;
    };
    password: {
        minLength?: number | null;
        maxLength?: number | null;
        strength?:  number | null;
    };
    tos: string | false;
    concurrentSessions: boolean;
};

export default {
    login:              false,
    forgotPassword:     false,
    signUp:             false,
    session: {
        duration:       ticksPerWeek,
        cookieAge:      ticksPerWeek,
        keepAlive:      ticksPerHour * 0.5,
    },
    password: {
        minLength:      null,
        maxLength:        72,
        strength:          3,
    },
    tos:                false,
    concurrentSessions: false,
} as Settings;
