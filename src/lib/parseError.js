 const parseError = (error) => {
    if (error?.extensions?.exception?.validationErrors?.length > 0) {
        const parsedError = Object.values(
            error?.extensions?.exception?.validationErrors[0]?.constraints
        )[0];

        return parsedError;
    }

    if (error.response?.data?.message) {
        return error.response?.data?.message;
    }

    if (error?.response?.data?.errors?.length > 0) {
        return error?.response?.data?.errors[0].message
    }

    if (error?.response?.data?.error?.message) {
        return error?.response?.data?.error?.message;
    }

    if (error.message) {
        return error.message;
    }

    return "An error occurred. Please try again.";
};

export default parseError;