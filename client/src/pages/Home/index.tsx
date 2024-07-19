import classNames from "classnames/bind";
import styles from './Home.module.sass'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function Home() {
    return ( 
        <div className='container mx-auto flex flex-col items-center gap-10'>
            <h1 className={cx('heading')}>Xác nhận thanh toán chi phí cho người tham gia</h1>
            <div className="w-full bg-gray-200" style={{height: '1px'}}></div>
            {/* <div className="container px-80 flex flex-col gap-10">
                <div className="grid grid-cols-3 gap-40 items-center">
                    <div>Cơ sở nghiên cứu :</div>
                    <div className="col-span-2 font-medium ">
                        <div className="border-2 border-gray-300 w-full p-2 flex items-center justify-between rounded">
                            Lựa chọn cơ sở
                            <FontAwesomeIcon icon={faChevronDown} size="sm"/>
                        </div>
                        <ul className="bg-gray-100 mt-2">
                            <li className="p-2 hover:bg-green-500 hover:text-white">Sample</li>
                            <li className="p-2 hover:bg-green-500 hover:text-white">Sample</li>
                            <li className="p-2 hover:bg-green-500 hover:text-white">Sample</li>
                            <li className="p-2 hover:bg-green-500 hover:text-white">Sample</li>
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-40 items-center">
                    <div>PTID :</div>
                </div>
                <div className="grid grid-cols-3 gap-40 items-center">
                    <div>Ngày thực hiện :</div>
                </div>
                <div className="grid grid-cols-3 gap-40 items-center">
                    <div>Thời gian bắt đầu :</div>
                </div>
                <div className="grid grid-cols-3 gap-40 items-center">
                    <div>Mã cuộc hẹn :</div>
                </div>
            </div> */}
            <button className="bg-green-500 rounded-xl px-14 py-3 text-white font-medium active:bg-green-600">Xác nhận</button>
        </div>
     );
}

export default Home;