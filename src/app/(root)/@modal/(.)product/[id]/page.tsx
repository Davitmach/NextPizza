import { ModalPage } from '@/components/shared/modal/modal';

type ModalProps = {
  params: { id: string }; // Dynamic route parameters are usually strings
};

export default async function Modal({ params }: ModalProps) {
  const id = parseInt(params.id, 10); // Convert the `id` to a number if needed

  return <ModalPage id={id} />;
}


  