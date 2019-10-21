import { ToastProgrammatic as Toast } from 'buefy';
import { IToastService } from '~/services/toast/IToast';
import { injectable } from '~/node_modules/inversify';

@injectable()
export class ToastService implements IToastService {
    show(config: ToastConfig) {
        let bulmaToastColorModifier;

        switch (config.type) {
            case ToastType.error:
                bulmaToastColorModifier = 'is-danger';
                break;
            case ToastType.info:
                bulmaToastColorModifier = 'is-info';
                break;
            case ToastType.success:
                bulmaToastColorModifier = 'is-success';
                break;
        }

        Toast.open(
            {
                message: config.message,
                type: bulmaToastColorModifier,
                duration: config.duration,
                queue: config.queue
            }
        )

    }
}

interface ToastConfig {
    message: string;
    duration?: number;
    queue: boolean;
    type: ToastType;
}

enum ToastType {
    success,
    error,
    info
}