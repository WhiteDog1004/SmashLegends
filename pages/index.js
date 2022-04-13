export default function Home() {
    return (
        <>
            <div className="container">
                <div className="topContainer">
                    <div className="icon"></div>
                    <input className="search"></input>
                </div>
                <div className="midContainer">
                    <div className="leftMid">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="rightMid">
                        <div></div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .topContainer {
                    display: flex;
                    align-items: center;
                }
                .midContainer {
                    width: 1200px;
                    height: 700px;
                    background: white;
                    border: 1px black solid;
                    display:flex;
                }
                .leftMid {
                    width:50%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .leftMid > div {
                    width: 90%;
                    height: 50%;
                    margin: 10px;
                    border-radius: 20px;
                    background: pink;
                }
                .rightMid {
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .rightMid > div {
                    width: 90%;
                    height: 100%;
                    margin: 10px;
                    background: pink;
                    border-radius: 20px;
                }
                .icon {
                    width: 80px;
                    height: 80px;
                    background-color: white;
                    border: 1px black solid;
                    border-radius: 50%;
                    margin: 10px;
                }
                .search {
                    background-color: white;
                    border: 1px black solid;
                    width: 400px;
                    height: 20px;
                    margin: 10px;
                    border-radius: 20px;
                    padding: 10px;
                }
            `}</style>
        </>
    );
}