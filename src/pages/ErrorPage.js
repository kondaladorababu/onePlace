// import { useRouteError } from 'react-router-dom';

function ErrorPage() {
    // const error = useRouteError();

    let title = 'An error occurred!';
    let message = 'Something went wrong!. Looks like this routing does not exists';

    // if (error.status === 500) {
    //     message = error.data.message;
    // }

    // if (error.status === 404) {
    //     title = 'Not found!';
    //     message = 'Could not find resource or page.';
    // }

    return (
        <>
            <p style={{ textAlign: 'center' }} title={title}>
                <p>{message}</p>
            </p>
        </>
    );
}

export default ErrorPage;
