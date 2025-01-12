
import { ModalPage } from '@/components/shared/modal/modal';

export default async function Modal({params}:any) {



const {id} = await params;
if(id) {
    return <ModalPage id={id}/>
}
}


