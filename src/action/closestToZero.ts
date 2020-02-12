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

      //Classe la liste des entiers plus proches de zéro au plus grand
      array.sort((previous: number, current: number) => {
        if (current < Math.abs(previous)) {
          if (Math.abs(current) === Math.abs(previous)) {
            return 1;
          } else {
            return 1;
          }
        } else {
          return -1;
        }
      });

      let numberFinal: number = array[0];
      //Gestion si l'entier est négatif recherche d'un eventuel doublon positif
      if (Math.sign(numberFinal) < 0) {
        const positive: number | undefined = array.find(
          current => current === Math.abs(numberFinal)
        );
        if (positive) {
          return positive;
        }
      }

      return numberFinal;
    }
  }

  //Retour 0 pour tous les autres cas
  return 0;
}
