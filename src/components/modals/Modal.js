import React from "react";
import "./Modal.css"

const Modal = ( {open, closeModal, header, children} ) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (
                <section>

                    <main>
                        {children}
                    </main>
                    <footer>
                        <button className="close" onClick={closeModal}> close </button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}

export default Modal;
