import { Button } from "../../components/Button/Button";
import { ButtonLink } from "../../styles/Button/Button";
import { Constans } from "../../constants/Constans";

const {
  DIRECTORIO_DE_TIENDAS,
  HOT_SALES: {
    SANDALIAS: { PORCENT_30 },
  },
  MI_CUENTA,
  SERVICIO_AL_CLIENTE,
} = Constans;

export const Header = () => {
  return (
    <header>
      <h1 className="text-center text-white bg-red-400/95 text-xl font-bold py-2">
        {PORCENT_30}
      </h1>
      <div className="relative select-none bg-gray-300 lg:flex lg:items-stretch w-full text-gray-500 pr-20 text-xs font-bold lg:justify-end ml-auto hover:cursor-pointer">
        <Button
          className={ButtonLink}
          textContent={DIRECTORIO_DE_TIENDAS.title}
        />
        <Button
          className={ButtonLink}
          textContent={SERVICIO_AL_CLIENTE.title}
        />
        <Button className={ButtonLink} textContent={MI_CUENTA.title} />
      </div>
    </header>
  );
};
