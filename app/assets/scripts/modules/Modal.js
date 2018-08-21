import $ from 'jquery';

export default class Modal {
    constructor() {
        this.modal = $('.modal');
        this.openButton = $('.open-modal');
        this.closeButton = $('.modal__close');
        this.event();
    }

    event() {
        //click on btn and open modal
        this.openButton.click(this.openModal.bind(this));
        //click on close btn
        this.closeButton.click(this.closeModal.bind(this));

        //press esc button
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e) {
        if(e.keyCode == 27) {
            this.closeModal();
        }
    }

    openModal() {
        console.log(this);
        this.modal.addClass('modal--is-visible');
        return false;
    }

    closeModal() {
        this.modal.removeClass('modal--is-visible');
    }

}