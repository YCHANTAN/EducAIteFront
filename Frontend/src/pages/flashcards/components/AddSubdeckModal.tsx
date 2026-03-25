import { AddDeckModal } from './AddDeckModal';

interface AddSubdeckModalProps {
  onClose: () => void;
  onSubmit: (payload: { title: string; color?: string }) => void;
}

export function AddSubdeckModal(props: AddSubdeckModalProps) {
  return <AddDeckModal {...props} />;
}
export default AddSubdeckModal;