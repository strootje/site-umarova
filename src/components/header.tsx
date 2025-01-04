export const Header = () => {
  return (
    <header class="gap-2 grid grid-cols-[1fr_auto_1fr]">
      <div class="flex flex-col justify-end col-start-2 bg-min p-2 h-20 md:h-40">
        <img class="w-12 h-auto" src="/site-umarova/images/logo.svg" />
      </div>

      <div class="sm:flex flex-col justify-end hidden col-start-3 mb-6 font-ro text-3 select-none line-height-tight">
        <h1>Ingevroren- Noodel Draagtas</h1>
        <span class="font-italic">
          Ministerie van Jodelen en Vingerverf
        </span>
      </div>
    </header>
  );
};
