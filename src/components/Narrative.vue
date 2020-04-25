<template>
  <div class="narrative">
    <div class="story">
      <small class="text">On this page every month you can read a short story, which is part of the stories on possible futures in the Aegean sea or the Mediterranean sea. All stories are hosted on the nodes of the networks of trust and are accesible only in proximity of the node.</small>
      <span class="text">There it was, floating in front of me. This is the first story, it ever told me. The story is about a trip.</span>
      <span class="text">It said, that this trip marked the beginning of all things. It started talking to me:</span>
      <span class="text">Here once, stretched forests and plains; two large rivers crossed the land and created lakes of various sizes filled with fresh water. The rivers began one from the west and the other from the east.</span>
      <span class="text">The climate was quite warm. There were tall trees, while large mammals lived throughout the region, such as elephants and giraffes, but also deer, antelopes, gazelles. There were also reptiles and birds. Around the lakes gathered hippopotamus and rhinoceros.</span>
      <span class="text">Movements took place frequently. The groups would gather, then a signal would be given and we would start. We would cross large parts of land and we would swim across the lakes. There was an order and an organization to the movements. But there was never any destination planned.</span>
      <span class="text">If during the trip a good spot was discovered, the group stopped there and this was the new home. That was exactly what happened to us. I remember well the first time we got here. It was raining hard and all the families were gathered close to each other to protect ourselves from the water. The rain must have lasted days. And when it eventually ceased and we saw the clear blue sky again above our heads, it was then that the older ones unanimously decided: this would be our place from now on.</span>
      <span class="text">The place treated us well. The local groups accepted us without any problems. Because there was food for all, we secured a peaceful coexistence. The vegetation after all was rich. Nevertheless, all of this makes me think about fragility. Of the present and the past. And always of the future.</span>
      <span class="text">After some time the explosions began. If you have not experienced something similar, it’s impossible to realize how it was. The sky was raining fire. Everything was red, black, grey. The earth was moaning and moving. Dense smoke covered everything. The era of the volcanoes lasted a long time. If you look carefully, you will still find ashes on me.</span>
      <span class="text">When the explosions were finally over, everything was different. First of all the land. What we once knew as our territory had now collapsed. There was only lava and water. And scattered around some scraps of land. These scraps were afterwards called islands. They seemed to float but they were solid. They were the peaks of the old earth.</span>
      <span class="text">We, like many others, came through the era of the explosions, but we were forced to become small. Gradually all the members of the group started to alter their structure. To survive on the fragments, you have to be a fragment yourself.</span>
      <span class="text">Then, it stopped talking for a while, and concentrated, as if it was scrolling through a large database.</span>
      <span class="text">Adaptation is the word, it said and it continued narrating:</span>
      <span class="text">Adaptation. Somehow, through adaptation to the new fragmented situation, the networks were born. These invisible threads, which hold the fragments together, connected and joined in dynamic balances, for pure survival reasons. How can something that was already united, be separated? Networks re-record the memory of the pre-existing connection.</span>
      <span class="text">After that, it fell silent. I wanted to touch it, but I was afraid, it was very fragile. It sank into its own self. Its shape was difficult to describe. I tried to recognize its colourings, but there were neither blue nor green nor grey. They seemed to constantly change. They were mirroring my image one moment, absorbing it the next.</span>
      <span class="text">After a few minutes, as if rousing itself from lethargy, it spoke again:</span>
      <span class="text">Connection and survival. For long time after us, other groups have been taking up the work of creating links and networks. They all, sooner or later, understood that connecting was the only way to survive. If you were not connected, you would die.</span>
      <span class="text">The prehistory and history of this region, was based on networks. They defined and continue to define the wider territory. There is an ongoing conversation between the nodes. If you are quiet, you will hear it. You will always be hearing, this lasting conversation over the waves, of the archipelago.</span>
      <small class="text">Kyriaki Goni, October 2018</small>
    </div>

    <div v-for="asset in assets" :key="asset.filename">
      <span v-if="asset.type == 'img'">
        <img class="asset" :src="'../static/story/' + asset.filename" alt="anime">
      </span>
      <span v-else-if="asset.type == 'vid'">
        <video autoplay loop muted width="300" height="300" class="asset">
          <source :src="'../static/story/' + asset.filename" type="video/mp4">
        </video>
      </span>
      <span v-else></span>
    </div>

  </div>
</template>

<script>
import Api from '../api';

export default {
  name: 'Narrative',

  data () {
    return {
      assets: []
    };
  },

  beforeMount () {
    /* const height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    document.getElementById('app').style.height = height + 'px';
    window.scrollTo(0, 0); */
  },

  created () {
    this.fetchAssets();
  },

  methods: {
    fetchAssets: function() {
      Api.fetchAssets().then(response => {
        this.assets = response.data;
      // eslint-disable-next-line
      }, error => {
        this.assets = [];
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.narrative {
  margin: 0 auto;

  .story {
    position: relative;

    .text {
      line-height: 22px;
      // background-color: #ff00ff;
      background-color: black;

      &:after {
        content: '';
        display: block;
        margin-bottom: 20px;
      }
    }
  }

  .asset {
    display: none;
    position: absolute;
    z-index: 0;
    max-height: 200px;
  }
}
</style>
