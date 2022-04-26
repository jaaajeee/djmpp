import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Myswal = withReactContent(Swal)

    Myswal.fire({
    title: 'Success',
    text: 'Activity Added Successfully',
    icon: 'success',
}) 

export default Myswal;
