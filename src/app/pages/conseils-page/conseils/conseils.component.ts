import { Component } from '@angular/core';
import { ConseilEcole } from 'src/app/core/models/conseil.model';

@Component({
  selector: 'app-conseils',
  templateUrl: './conseils.component.html',
  styleUrls: ['./conseils.component.scss'],
})
export class ConseilsComponent {
  conseils: Array<ConseilEcole> = [
    {
      id: 2,
      date: '18/10/2022',
      resume:
        "Pour le moment la somme récoltée pour la coopérative scolaire est trop faible, c'est le seul financement qui permet de faire des sorties. L'école demande le statut de REP en colaboration avec le collège du lac pour réduire les effectifs des élèves par classe. Le réglèment intérieur a été validé sous condition de rajouter l'obligation explicite pour les parents de traiter les poux lorsque leurs enfants en ont. Il n'y aura plus d'agent en bas le matin pour acceuillir les parents, elle sera en haut, un espace poussette sera mis a disposition en bas. Laisser les enfants dans les poussettes sera impossible. Dans le cadre du plan de sobriété énergetique, le chauffage sera mis en route au retour des vacances de la Toussaint, température prévu : 19°C. Les tarifs de la cantines changent. Il semble qu'une discussion est en cours pour avoir des agents supplémentaires en élémentaires. Les agents sont depuis l'année derniere en sous-effectif. Ce qui ne permet pas, pas exemple, d'ouvrir le self. ",
      detailPdf: 'assets/documents/comptes_rendu/CE18102022.pdf',
      isHidden: false,
    },
    {
      id: 1,
      date: '28/06/2022',
      resume:
        "Les enseignants ont organisé énormement de sorties et de projets cette année, cela leur a demandé beaucoup d'efforts et beaucoup de temps personnel, ils comptent sur les parents pour de l'aide et de l'investissement pour les aider à l'organisation dans les prochaines années, sans ce soutien, ils n'auront plus l'energie ni la motivation de le faire au detriment de leur vie personnelle. Des travaux de sécurité seront effectués pendants les vacances scolaires particulierement pour sécuriser la cour de maternelle. L'entrée de l'école est trop petite pour les 250 élèves, les elementaires devront rentrer dans la cour par le couloir qui longe le college. L'année prochaine le local vélo, prévu initialement uniquement pour le personnel, ne pourra plus être utilisé par les élèves. Probleme avec la rue et les voitures mal garés. Qui rend très difficile les sorties scolaires en bus scolaire. Il est possible de rendre la rue pietonne le matin, ils ont le matériel mais pas assez d'agents pour le faire. Et ce n'est pas leur métier. Sarah Bernhardt a effectué des actions très appréciés, particulierement pour la liaison CM2 / 6eme. Les enseignants ont souligné que la majorité des parents attendent toujours le dernier moment pour apporter les documents ou matériels demandés, ce qui est une source de stress pour eux, qu'ils interpretent comme un manque d'implication des parents. Ce qui les découragent dans leurs demarches de proposer des activités interessantes pour nos enfants. Pour ouvrir le self à la cantine en élémentaire, ils ont besoin de 9 agents. Ils en ont que 7. Sans action des parents auprès de la mairie pour demander ces agents, le self restera fermé. Les parents peuvent agir pour : Accelerer les travaux de sécurité du batiment aupres de la mairie Demander plus de personnel de la marie pour augmenter la sécurité de la rue et ouvrir le self Exiger que les enseignants absents soient remplacés par du personnel remplacant de l'education nationale, particulierement pour celles qui sont prévisibles (Ex : Sejour à l'hopital programmé, maternité)",
      detailPdf: 'assets/documents/comptes_rendu/28062022.pdf',
      isHidden: true,
    },
  ];
}
