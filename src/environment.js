let BASE_URL = '';

if (process.env.REACT_APP_ENV === 'development') {
    BASE_URL = 'http://localhost:5000';
}

if (process.env.REACT_APP_ENV === 'production') {
    BASE_URL = 'https://jonghunjacoblee.com';
}

export { BASE_URL };
