import getProIcon from '../assets/icons/get-pro.svg';
import collectionsIcon from '../assets/icons/collections.svg';

const UserModal = ({ user }) => {
  return (
    <div
      className={`${
        user ? 'grid gap-3' : 'hidden'
      } absolute right-2 top-20 gap-[2px] rounded-lg w-[184px] px-2 py-4 shadow-shadowMd bg-white`}
    >
      <div className="grid gap-1">
        <h7 className="text-h7 text-textPrimary  font-medium">
          Abu Anwar MD Abdullah
        </h7>
        <p className="text-h7 text-textSecondary">abuanwar072@gmail.com</p>
        <div className="border-b border-secondary"></div>
        <div className="grid gap-1">
          <button className="flex gap-2 items-center hover:bg-bgSecondary hover:text-textPrimary p-1 rounded-lg">
            <img src={getProIcon} alt="" />
            <h6 className="text-h6 text-textPrimary capitalize">Get Pro</h6>
          </button>
          <button className="flex gap-2 items-center hover:bg-bgSecondary hover:text-textPrimary p-1 rounded-lg">
            <img src={collectionsIcon} alt="" />
            <h6 className="text-h6 text-textPrimary capitalize">Collections</h6>
          </button>
          <button className="text-h6 text-textPrimary text-start hover:bg-bgSecondary hover:text-textPrimary p-1 rounded-lg">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
