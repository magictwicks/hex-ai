import './css/modal.css'

function Modal({content, show, hideModal}){
    const showClass = show ? "modal display-block" : "modal display-none"  

    return (
      <div class={showClass} >
          {content}
          <button class="modal-close" onClick={hideModal}>X</button>
      </div>
    );
}

export default Modal;