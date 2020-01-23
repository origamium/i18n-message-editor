import * as Sentry from "@sentry/browser";
import {
    ErrorInfo,
    PureComponent,
    ReactElement,
    ReactNodeArray,
    ReactPortal
} from "react";

interface Props {
    children:
        | ReactElement<any, string | React.JSXElementConstructor<any>>
        | string
        | number
        | {}
        | ReactNodeArray
        | ReactPortal
        | boolean
        | null
        | undefined;
}

interface State {
    eventId?: string;
}

export class ErrorBoundary extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            eventId: undefined
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        Sentry.withScope(scope => {
            scope.setExtras(errorInfo);
            const eventId = Sentry.captureException(error);
            this.setState({
                eventId
            });
            // Sentry.showReportDialog({ eventId })
        });
    }

    render():
        | ReactElement<any, string | React.JSXElementConstructor<any>>
        | string
        | number
        | {}
        | ReactNodeArray
        | ReactPortal
        | boolean
        | null
        | undefined {
        return this.props.children;
    }
}
