const routes = {
    courses: '/courses',
    login: '/auth/login',
    roles: '/roles',
    course: (id: string) => `/courses/${id}`,
    user: {
        me: '/user/me'
    }
}

export default routes
