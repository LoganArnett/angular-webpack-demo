class MainCtrl {
    constructor($state) {
        this.$state = $state;
        this.message = 'Angular with Webpack and Babel!';
    }

    clickIt() {
        return this.$state.go('about');
    }
}

export { MainCtrl }
