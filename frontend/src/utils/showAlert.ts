import Swal, { SweetAlertIcon } from "sweetalert2";

 interface Ialert {
  icon: SweetAlertIcon | undefined;
  title: string | HTMLElement | JQuery | undefined;
  text: string;
  buttonText?: string;
  showConfirmation?: boolean;
  confirmationAction?: () => void;
}

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    cancelButton: "py-3 rounded-md text-white text-sm font-medium active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all",
    confirmButton: "py-3 rounded-md text-white text-sm font-medium active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all",
  },
  buttonsStyling: true,
});

const showAlert = ({
  icon = "question",
  title,
  text,
  showConfirmation = false,
  buttonText = "Ok",
  confirmationAction,
}: Ialert) => {
  swalWithBootstrapButtons
    .fire({
      icon: icon,
      title: title,
      text: text,
      showCancelButton: showConfirmation,
      confirmButtonText: buttonText,
      reverseButtons: showConfirmation,
    })
    .then((result: any) => {
      if (result.isConfirmed) {
        if (confirmationAction) {
          confirmationAction();
        }
      }
    });
};

export default showAlert;
