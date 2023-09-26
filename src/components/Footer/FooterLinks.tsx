import { Input } from "../Input/Input";

export const FooterLinks = () => {
  return (
    <footer className="w-full text-white ">
      <div className="w-full px-5 py-7 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex flex-col gap-5 w-64  md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <h4 className=" text-xl text-black">NEWSLETTER</h4>
          <p className=" text-xs text-black">
            Regístrate para ser el primero en recibir nuestras noticias
          </p>
          <Input />
        </div>
        <div className="flex-grow flex gap-10 justify-center flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              SERVICIO AL CLIENTE
            </h2>
            <div className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">CONTÁCTENOS</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  CAMBIOS Y DEVOLUCIONES
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  POLÍTICAS DE LA TIENDA
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  POLÍTICA DE DATOS
                </a>
              </li>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              MI CUENTA
            </h2>
            <div className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">MIS PEDIDOS</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  MIS DEVOLUCIONES
                </a>
              </li>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              RECURSOS
            </h2>
            <div className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">TIENDAS</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  DEVOLUCIONES
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
