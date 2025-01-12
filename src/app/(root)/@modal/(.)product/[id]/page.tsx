
import { ModalPage } from '@/components/shared/modal/modal';
export default async function Modal({params}:{params:{id:number}}) {

const id = params.id;

    return <ModalPage id={id}/>
    
}