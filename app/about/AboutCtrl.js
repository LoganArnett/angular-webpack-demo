class AboutCtrl {
    constructor($state) {
        this.$state = $state;
        this.message = 'Is What its all about YO!';
    }

    clickThat() {
        return this.$state.go('main');
    }
}

export { AboutCtrl }
