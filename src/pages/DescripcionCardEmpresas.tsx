import { FunctionComponent } from "react";

const DescripcionCardEmpresas: FunctionComponent = () => {
  return (
    <section className="relative bg-whitesmoke w-full flex flex-col items-center justify-start gap-[10px] text-left text-xl text-black font-sub-titulo-1">
      <header className="w-[1054px] h-[121px] flex flex-col items-start justify-start py-2.5 px-5 box-border gap-[0.5px] text-left text-[32px] text-rosa font-sub-titulo-1">
        <div className="relative leading-[37.5px] capitalize font-semibold flex items-center w-[571px] h-14 shrink-0">
          Lista de paginas para Empresas
        </div>
        <div className="w-[1034px] flex flex-row items-center justify-between text-sm text-gray">
          <div className="rounded-[5px] bg-white w-[1032px] h-10 flex flex-row items-start justify-start pt-2 px-2.5 pb-0 box-border">
            <div className="relative leading-[18px]">
              Haz que tu red conozca Bodas de Hoy y EventosOrganizador.
              Recibirán una prueba ampliada de 30 días, y puedes recibir
              increíbles recompensas.
            </div>
          </div>
        </div>
      </header>
      <div className="w-[1044px] flex flex-row items-center justify-between">
        <div className="flex flex-col items-start justify-start py-0 px-5">
          <div className="flex flex-col items-start justify-start">
            <div className="relative font-semibold flex items-center w-[514.9px] h-[31.3px] shrink-0">
              María - Web principal para novios
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[10px] text-xs text-gray">
            <div className="flex flex-row items-start justify-start">
              <b className="relative">Valoraciones</b>
              <div className="flex flex-row items-center justify-start gap-[2px]">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/favorite--24--outline.svg"
                />
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/favorite--24--outline.svg"
                />
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/favorite--24--outline.svg"
                />
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/favorite--24--outline.svg"
                />
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/favorite--24--outline.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <b className="relative">
                <span>{`Comentarios: `}</span>
                <span className="text-dodgerblue">37</span>
              </b>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start text-center text-sm text-white font-montserrat">
          <div className="flex flex-col items-start justify-start gap-[5px]">
            <div className="relative rounded-md bg-rosa w-[330px] h-[35px]">
              <div className="absolute top-[10px] left-[calc(50%_-_134.6px)] w-[269.1px] flex flex-row items-center justify-center py-0 px-[86px] box-border">
                <img className="relative w-4 h-4" alt="" src="/vector.svg" />
                <div className="flex flex-row items-center justify-center">
                  <b className="relative leading-[14px] flex items-center justify-center w-[127px] h-[17px] shrink-0">
                    Añadir al carrito
                  </b>
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-black relative rounded-md w-[330px] h-[35px]">
              <img
                className="absolute h-[calc(100%_-_23px)] w-[calc(100%_-_308px)] top-[10px] right-[241.5px] bottom-[13px] left-[66.5px] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/img--previsualizacin-en-vivomargin.svg"
              />
              <b className="absolute top-[7.5px] left-[88.3px] text-sm leading-[14px] flex font-montserrat text-white text-left items-center w-[175.8px] h-[17.5px]">
                Previsualización en vivo
              </b>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start p-2.5 gap-[10px]">
        <img
          className="relative rounded-2xl w-[704px] h-[381px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/divbwqrheqfmargin@2x.png"
        />
        <div className="flex flex-col items-start justify-start gap-[10px]">
          <img
            className="relative rounded-2xl w-80 h-[120px] object-cover"
            alt=""
            src="/divmdxkxtsa@2x.png"
          />
          <img
            className="relative rounded-2xl w-80 h-[120px] object-cover"
            alt=""
            src="/divmdxkxtsa@2x.png"
          />
          <img
            className="relative rounded-2xl w-80 h-[120px] object-cover"
            alt=""
            src="/divmdxkxtsa@2x.png"
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start p-2.5 gap-[10px] text-[16px] font-segoe-ui">
        <div className="flex flex-row items-center justify-center">
          <div className="relative leading-[26px] flex items-center w-[702px] shrink-0">
            <span className="w-full">
              <p className="m-0">
                Rockfest es una plantilla receptiva, bien diseñada y con píxeles
                perfectos para eventos musicales, conciertos, festivales, clubes
                nocturnos y más. Rockfest tiene muchos estilos y elementos para
                ayudarlo a crear un sitio web moderno y de belleza en poco
                tiempo.
              </p>
              <ul className="m-0 font-inherit text-inherit pl-[21px]">
                <li className="mb-0">3 esquemas únicos</li>
                <li className="mb-0">Diseños adaptables</li>
                <li className="mb-0">
                  Formulario de contacto con Google Recapcha
                </li>
                <li className="mb-0">Fondo de paralaje</li>
                <li>Íconos de fuentes ligeras</li>
              </ul>
            </span>
          </div>
        </div>
        <div className="w-[324px] flex flex-row items-start justify-start p-2.5 box-border text-xs font-montserrat">
          <div className="relative w-[201.5px] h-[173px]">
            <div className="absolute top-[0px] left-[18.5px] flex flex-col items-start justify-start gap-[18px]">
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <div className="relative leading-[16px] font-extrabold flex items-center w-[183px] h-4 shrink-0">
                  Tipos de archivo incluidos
                </div>
                <div className="relative text-smi leading-[16px] font-segoe-ui flex items-center w-[89px] h-4 shrink-0">
                  HTML, CSS, JS.
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <div className="relative leading-[16px] font-extrabold flex items-center w-[183px] h-4 shrink-0">
                  Adiciones
                </div>
                <div className="relative text-smi leading-[16px] font-segoe-ui flex items-center w-[183px] h-[37px] shrink-0">
                  <span className="w-full">
                    <p className="m-0">Responsivo</p>
                    <p className="m-0">Documentación incluida</p>
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <div className="relative leading-[16px] font-extrabold flex items-center w-[183px] h-4 shrink-0">
                  Licencia comercial
                </div>
                <div className="relative text-smi [text-decoration:underline] leading-[16px] font-segoe-ui flex items-center w-[161px] h-4 shrink-0">
                  Información adicional
                </div>
              </div>
            </div>
            <div className="absolute top-[0.5px] left-[0px] w-2 h-[142px]">
              <div className="absolute h-[45.07%] top-[0%] bottom-[54.93%] left-[3.5px] bg-rosa w-px" />
              <div className="absolute top-[0px] left-[0px] rounded bg-white box-border w-2 h-2 border-[1px] border-solid border-rosa" />
              <div className="absolute h-[49.3%] top-[45.07%] bottom-[5.63%] left-[3.5px] bg-rosa w-px" />
              <div className="absolute top-[59px] left-[0px] rounded bg-white box-border w-2 h-2 border-[1px] border-solid border-rosa" />
              <div className="absolute top-[134px] left-[0px] rounded bg-white box-border w-2 h-2 border-[1px] border-solid border-rosa" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescripcionCardEmpresas;
