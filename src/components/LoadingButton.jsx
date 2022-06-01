import { Button, CircularProgress } from "@material-ui/core";

export default function ProgressButton(props) {
    const { isLoading, ...otherProps } = props;
    return (
        <Button disabled={isLoading} {...otherProps}>
            {!isLoading && props.children}

            {isLoading && <CircularProgress color="secondary" size={20} />}
        </Button>
    );
}