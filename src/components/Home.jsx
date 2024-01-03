import {useEffect,useState} from 'react'
import JokesDiv from './JokesDiv'
import {FiMenu as Menu} from "react-icons/fi"
import "./home.css"

const Home = () => {
  
  const [jokes,setJokes] = useState([])
  const [finding,setFinding] = useState(false);
  const [mobile,setMobile] = useState(true)
  
  function find(cata = "Any") {
        let url = `https://v2.jokeapi.dev/joke/${cata}?amount=15`
        setMobile(true)
        setFinding(false)
        fetch(url)
        .then(res => res.json())
        .then(result =>{
            setJokes(result.jokes)
            setFinding(true)
        })
        .catch(err =>{
             console.log(err)
             alert("something goes wrong")
        })
  }

  useEffect(()=>{
    find()
  },[])

  const JD = jokes.map(data =>{
        if(data.type == "twopart")
            return <JokesDiv delivery={data.delivery} setup={data.setup} type={data.category}/>
        return <JokesDiv delivery={""} setup={data.joke} type={data.category}/>
    })
    

  return (
    <div className={' w-screen h-screen flex bg-gray-200'}>
        <div className='relative mx-auto h-screen flex flex-col bg-gray-300 w-1/2 max-md:w-full overflow-y-auto shadow-s'>

            <div className="sticky z-20 transition duration-200 py-5 max-md:text-sm left-0 top-0 w-full bg-gray-400 grid gap-2  overflo"> 
                
                <Menu
                    onClick={() => setMobile(!mobile)}
                    className='absolute right-0 me-3 mt-2 text-3xl text-white cursor-pointer '
                 />
                <div className={mobile ? `show` : `active` + ` grid gap-3 ms-3`}>
                    <div
                        onClick={() => find("programming")}
                        className="bg-gray-800 text-white font-bold w-fit px-2 py-1 rounded cursor-pointer">programming</div>
                    <div onClick={() => find("misc")} className="bg-gray-800 text-white font-bold w-fit px-2 py-1 rounded cursor-pointer">misc</div>
                    <div onClick={() => find("dark")} className="bg-gray-800 text-white font-bold w-fit px-2 py-1 rounded cursor-pointer">dark</div>
                    <div onClick={() => find("pun")} className="bg-gray-800 text-white font-bold w-fit px-2 py-1 rounded cursor-pointer">pun</div>
                    <div onClick={() => find("christmas")} className="bg-gray-800 text-white font-bold w-fit px-2 py-1 rounded cursor-pointer">christmas</div>
                    <div onClick={() => find("spooky")} className="bg-gray-800 text-white font-bold w-fit px-2 py-1 rounded cursor-pointer">spooky</div>
                </div>
            </div>

            {finding  ? JD 
            :   <img src="./Double Ring-1.4s-217px.svg" className='m-auto' width={"50%"} alt="" />
            }
            
            <button onClick={() => find()} className='mx-auto mb-5 bg-gray-800 text-white py-2 mt-2 w-11/12 rounded'> 
                Next 
            </button>

        </div>
    </div>
  )
}

export default Home