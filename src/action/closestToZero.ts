export default function closestToZero(data: string): number {
  if (data) {
    let array: number[];

    //Gestion des données incorrect rentrée dans l'input
    try {
      array = JSON.parse(data);
    } catch (error) {
      return 0;
    }

    if (Array.isArray(array) && array.length > 0) {
      //Pour de la rapidité et des problèmes avec typeScript j'ai retiré la gestion des array multidimensions
      //const flatArray = array.flat();

      array.sort((previous: number, current: number) => {
        return Math.abs(previous) - Math.abs(current);
      });

      let numberFinal: number = array[0];

      const positive: number | undefined = array.find(
        current => current === Math.abs(numberFinal)
      );

      return positive ? positive : numberFinal;
    }
  }

  return 0;
}
