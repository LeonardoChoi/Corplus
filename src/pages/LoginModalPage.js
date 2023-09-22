import LoginModal from "../components/LoginModal";
import "../index.css";
import React, { useState } from "react";

function LoginModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <button className="login-button" onClick={handleClose}>
        Login!
      </button>
    </div>
  );
  const modal = (
    <LoginModal onClose={handleClose} actionBar={actionBar}>
      <p>contenent in children</p>
    </LoginModal>
  );
  return (
    <div>
      <button onClick={handleClick} className="login-button">
        Login
      </button>
      <p>
        {
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, beatae nobis porro earum quo nulla expedita molestiae architecto a illo qui fuga quisquam reiciendis ipsam est consectetur ex iure. Saepe consequuntur ipsum nobis sint eligendi, debitis repellendus, ut aut ipsa rem culpa quasi corrupti quisquam officiis, quis sed eveniet dignissimos? Rerum reiciendis repudiandae, fugit illum cum excepturi libero assumenda saepe harum veritatis cumque laudantium ut porro, veniam expedita aperiam perspiciatis soluta nisi doloremque quisquam est fugiat. Aliquam dicta dolorem illo nesciunt, alias id voluptatibus rerum optio odit in et repellendus labore repellat delectus natus saepe ab quasi recusandae laborum reprehenderit tempora. Praesentium, dignissimos corrupti soluta harum, atque aut ducimus a magnam quasi nulla adipisci sapiente at quidem numquam fugiat, iure dicta cumque sequi quas ratione. Eligendi aut iste voluptas soluta placeat ipsam dicta, cum consequatur dolor debitis harum laborum fugiat! Aperiam tempore blanditiis repellendus beatae numquam iste quasi doloremque unde harum, magni sunt sint quas eum, saepe esse molestias. Sunt quam tempora, temporibus aliquam asperiores, odio facere nostrum ab cum id dolor minus, ullam necessitatibus itaque. Facilis at optio accusamus magnam! At atque quas doloribus. Ad ab vitae fuga sequi laborum omnis nisi quo iusto maiores, error quidem quas eius quod unde, delectus corporis at iure facilis expedita iste cum ex corrupti. Fuga consectetur totam nesciunt ex maxime pariatur magnam alias explicabo veniam recusandae, vel inventore. Et error fugiat earum reiciendis, ex libero molestiae ullam, dignissimos vero inventore pariatur voluptatum ratione ipsam, voluptatibus repellendus obcaecati! Nihil praesentium inventore consequuntur repellat, odit labore veritatis veniam asperiores impedit quidem eveniet magnam error vel similique non voluptatibus exercitationem quis sapiente pariatur molestias doloribus. Animi voluptatum tenetur, ipsa consequatur totam doloribus sit facilis laborum, fugiat quasi deserunt beatae magnam ab quibusdam, sequi placeat eum vitae alias saepe sunt. Officia quia sint assumenda, amet porro eligendi blanditiis ea rem dolore, quis ex. Itaque, aut iusto quidem necessitatibus odio eveniet, at corrupti provident commodi, inventore aspernatur? Eius fugiat quisquam necessitatibus illo error aliquam dolores tempora, labore quam aut autem, magni dolorum! Voluptatem cupiditate non maxime autem necessitatibus repellendus dolores, amet itaque eaque repudiandae obcaecati sint ipsa at placeat dignissimos, tempore possimus sit unde labore quibusdam quas modi! Ea voluptates praesentium in repudiandae eligendi repellendus cupiditate dolor maiores odio! Quidem eligendi quasi fuga labore est. Culpa minus non temporibus atque dicta inventore blanditiis iste officiis dolorum tempora vitae repudiandae sint unde, alias distinctio laborum hic debitis officia et explicabo? Ullam, enim! Odio quidem reiciendis ipsam illo at sint rem facilis dignissimos exercitationem. Natus aperiam modi quod veniam, similique obcaecati ut magni quae dolores sapiente repellat, numquam minus autem. Repellat, voluptatibus atque molestiae facere numquam sunt. Nobis, nemo voluptate quaerat reiciendis laboriosam quas molestiae sequi perferendis. Corporis unde fugit, libero dolor fugiat delectus maiores doloremque quam, ex iure aspernatur! Et excepturi laborum officia dolore ex est a consectetur. Distinctio vitae ut quasi ratione atque, labore quisquam mollitia doloribus ab illo iusto laboriosam reiciendis non quos dolorum assumenda obcaecati fugiat ullam, consequatur ea exercitationem laudantium eos commodi porro? Tenetur aut aliquid delectus quos iure? Et, eaque dicta! Ipsam, repellendus ullam dolorem modi sequi natus nostrum tempora ab! Molestias nobis tenetur, ratione laboriosam adipisci est nam! Voluptates minima, consequatur ipsa consectetur consequuntur animi ratione laboriosam accusantium ipsum. Exercitationem iste, deleniti laudantium dolorem illum architecto veritatis at quibusdam in voluptas sunt a vitae nulla eaque facilis optio autem ad quis, dicta blanditiis, id quia. Sequi voluptas illum laboriosam assumenda consequuntur tenetur, et magni veritatis impedit, porro cupiditate rem iure sit officia nobis dicta vitae libero, minus veniam. Rem deserunt architecto sapiente ipsam, in adipisci, molestiae quae voluptas dolores aperiam doloribus quos nobis numquam possimus. Voluptates cumque, velit consequuntur iste obcaecati suscipit accusamus ipsam officiis at ut eius quasi beatae ipsa sapiente ab aliquid voluptatum. In debitis nihil perferendis natus explicabo ipsum expedita dolor dignissimos, laboriosam incidunt quae maxime! Eius aliquam non eum quidem laudantium delectus voluptates consequuntur a, autem, officia soluta minima sunt tempore in ut eligendi quae odit quas. Cumque omnis ea quod libero illo cupiditate, nesciunt nulla eligendi, a nemo neque culpa beatae laborum assumenda, eveniet ab ad aperiam fugiat consectetur aspernatur vel. Minus alias minima quisquam. Accusantium magni corrupti velit hic ipsam laudantium consectetur, eveniet dolor, praesentium ratione, sit asperiores sed. Inventore in natus, ea veniam obcaecati consequatur expedita placeat doloribus neque ratione accusantium corporis ipsum. Numquam eius illum modi voluptatum tempore aperiam quidem, aliquam rem, inventore aspernatur debitis quas commodi optio enim hic reiciendis ipsam tenetur? Illo quibusdam magnam dolore dolorem laudantium? Deleniti voluptates nisi doloribus, velit itaque illum modi laboriosam! Ducimus, eveniet laborum eligendi in iusto quam, consequatur voluptates libero nemo laudantium iste fuga. Dicta provident laborum impedit accusantium pariatur ducimus non blanditiis quo modi amet, nemo odit, minima aliquid ea hic voluptates ut dolores ipsum laboriosam ipsam inventore commodi. Nesciunt mollitia incidunt eum hic deleniti aut pariatur vero nam fugiat amet totam sapiente voluptatem earum porro culpa tenetur animi aliquid consequuntur, distinctio blanditiis, doloremque provident minima rerum vitae! Repellat excepturi quo quas consectetur debitis, aperiam neque placeat quisquam beatae eaque magnam amet nobis, nam quis eum minima velit! Porro voluptas quo perspiciatis iure magni voluptatem sed! Nesciunt repellat, veniam quam ratione et voluptatibus! Minus cumque perferendis, commodi aliquid incidunt assumenda aut dicta laboriosam sint mollitia placeat eius dolor unde, sapiente numquam. Minus in delectus quidem, quos, animi porro sit dicta recusandae, quae minima fugiat itaque magnam facilis qui veritatis vero voluptas sed sunt. Ipsum, laudantium. Debitis, accusamus quae possimus laboriosam, reiciendis saepe nisi est iusto dolores sint tempore ullam. Repudiandae harum quos omnis pariatur dolorum natus, culpa voluptate. Voluptatibus corrupti voluptas repudiandae nobis fugiat atque, culpa, tempora dolor laborum aperiam non quo animi aliquam? Maxime, voluptas quibusdam porro quae ipsa illo dolore reiciendis sint tenetur nobis natus quo facere animi distinctio optio possimus laudantium ullam, iusto placeat explicabo, praesentium consectetur et quod? Nostrum consectetur culpa non, alias rerum nisi iusto debitis, cum minus, accusamus exercitationem perferendis impedit dolorum inventore rem quis et cupiditate optio reprehenderit? Illum, non amet. Quae natus sit iure delectus unde! Delectus!"
        }
      </p>
      {showModal && modal}
    </div>
  );
}

export default LoginModalPage;
