import { NavLink } from "react-router-dom"
import {useContext} from 'react'
import { ShoppingCartContext } from '../../Context'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    //con tailwing podemos guardar el css en constantes//
    const activeStyle = 'underline underline-offset-4'

    //NavLink nos permite redireccionar y editar la forma en que funcionan los links de nuestro nav//
    return (
        <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to = '/'> 
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/'
                    onClick={()=> context.setSearchByCategory()}
                    className={({isActive}) => 
                    isActive ? activeStyle:undefined
                }
                    > 
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/clothes'
                    onClick={()=> context.setSearchByCategory('clothes')}
                    className={({isActive}) => 
                    isActive ? activeStyle:undefined
                }
                    > 
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/electronics'
                    onClick={()=> context.setSearchByCategory('electronics')}
                    className={({isActive}) => 
                    isActive ? activeStyle:undefined
                }
                    > 
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/fornitures'
                    onClick={()=> context.setSearchByCategory('fornitures')}
                    className={({isActive}) => 
                    isActive ? activeStyle:undefined
                }
                    > 
                        Fornitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/toys'
                    onClick={()=> context.setSearchByCategory('toys')}
                    className={({isActive}) => 
                    isActive ? activeStyle:undefined
                }
                    > 
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/others'
                    onClick={()=> context.setSearchByCategory('others')}
                    className={({isActive}) => 
                    isActive ? activeStyle:undefined
                }
                    > 
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                        Correo
                </li>
                <li>
                    <NavLink to = '/my-orders'
                    className={({isActive}) => 
                    isActive ? activeStyle:undefined
                }
                    > 
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/my-account'
                    className={({isActive}) => 
                    isActive ? activeStyle:undefined
                }
                    > 
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/sign-in'
                    className={({isActive}) => 
                    isActive ? activeStyle:undefined
                }
                    > 
                        Sign In
                    </NavLink>
                </li>
                <li>
                <ShoppingCartIcon className="w-6 h-6 "/>
                
                </li>
                <li>
                <div>{context.cartProducts.length}</div> 
                </li>
            </ul>
        </nav>
    )
}

export default Navbar