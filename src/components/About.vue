<template>
  <div class="narrative">
    <div class="text">
      <h4>Networks of Trust, 2019</h4>

      <p>
        The work has as its starting point the since the antiquity presence of networks in the Aegean archipelago in Greece, as well as the specific topography and geography of insularity, which combines connection and isolation.
      </p>

      <p>
        The piece ‘An oral story about networks of trust’ with references to the oral tradition of the Aegean, offers an imaginative arbitrary narration about the origins of the networks in the region, the origins of the archipelagic infrastructures.
      </p>

      <p>
        Following this long lasting presence of networks the Aegean is conceived as a possible model for a new decentralization. In this context, I set up an offline network with one node on Tilos, a small island in the southeastern Aegean, a second one in Athens and a third nomadic node. This third mobile node is presented here as part of the installation and you can connect to it through your device during the exhibition.
      </p>

      <p>
        The offline network is combined with technologies such as P2P and the Interface File System (IPFS) for a distributed data storage resilient to potential censorship and control. The exact description of the network is depicted in the drawing ‘A diagram about networks of trust’.
      </p>

      <p>
        The viewers are invited to upload to one of the three nodes realistic or imaginative short stories about possible futures for the Aegean and the Mediterranean. Short texts can relate amongst others to networks, technologies, the Internet, the concept of citizenship, climate change, population movements or the personal experience of insularity. Texts are hosted on the node and are accessible to everyone. Sign in to the node and leave your own story.
      </p>

      <p>
        Material, such as images and entries from travellog during the field research, is also part of this installation.
      </p>

      <p>
        <small>The project is a commission by The New Networked Normal partners (NNN). The New Networked Normal explores art, technology and citizenship in the age of the Internet, a partnership project by Abandon Normal Devices (UK), Centre de Cultura Contemporània de Barcelona (CCCB) (ES), The Influencers (ES),Transmediale (DE) and STRP (NL). This project has been co-funded with support from the Creative Europe program.</small>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',

  beforeMount () {
    /*const height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    document.getElementById('app').style.height = height + 'px';
    window.scrollTo(0, 0);*/
  }
};
</script>

<style lang="scss" scoped>
.narrative {
  margin: 0 auto;
  margin-top: -20px;

  .text {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 40px;
  }
}
</style>
