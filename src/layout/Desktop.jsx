import UserGraphBar from "../components/UserGraphBar";
import UserGraphLine from "../components/UserGraphLine";

function Desktop() {
    return (
        <>
            <div className="flex flex-col text-ebrat-white py-5">
                <div className="flex w-full gap-28 justify-center items-center">
                    <div className="h-[240px] w-[400px] text-center">
                        <span>Valor Total Cotizaciones Diarias</span>
                        <UserGraphLine />
                    </div>
                    <div className="h-[200px] w-[400px] text-center">
                        <span>#Cotizaciones Dia</span>
                        <UserGraphBar />
                    </div>
                </div>
                <div className="w-full flex flex-col  items-center pt-5 gap-12">
                    <div className="w-3/4">
                        <div className="flex justify-between border-b border-[#ffc744] pt-3">
                            <span>Valor Cotizado</span>
                            <span>Total</span>
                        </div>
                        <div className="flex justify-between border-b border-[#ffc744] pt-3">
                            <span>30d</span>
                            <span>$1.000.000</span> 
                        </div>
                        <div className="flex justify-between border-b border-[#ffc744] pt-3">
                            <span>1y</span>
                            <span>$100.000.000</span>
                        </div>
                    </div>
                    <div className="w-3/4">
                        <div className="flex justify-between border-b border-[#ffc744] pt-3">
                            <span>#Cotizaciones</span>
                            <span>Total</span>
                        </div>
                        <div className="flex justify-between border-b border-[#ffc744] pt-3">
                            <span>30d</span>
                            <span>1.000</span>
                        </div>
                        <div className="flex justify-between border-b border-[#ffc744] pt-3">
                            <span>1y</span>
                            <span>10.000</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Desktop;