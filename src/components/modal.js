function Modal({content, show, hideModal}){
    const showClass = show ? "modal display-block" : "modal display-none"  

    return (
      <div class={showClass} >
          {content}
          <button class="modal-close" onClick={hideModal}>Close</button>
      </div>
    );
}

export default Modal;