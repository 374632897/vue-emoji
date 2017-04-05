(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VueEmoji = factory());
}(this, (function () { 'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();



























var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

// referenced from emojiarea https://github.com/diy/jquery-emojiarea/blob/master/jquery.emojiarea.js#L51-L121
var doc = document;

var _restoreSelection = void 0;
var _saveSelection = void 0;
var _replaceSelection = void 0;
if (window.getSelection) {
  _restoreSelection = function restoreSelection(savedSelection) {
    var sel = window.getSelection();
    sel.removeAllRanges();
    for (var i = 0, len = savedSelection.length; i < len; ++i) {
      sel.addRange(savedSelection[i]);
    }
  };
  _saveSelection = function saveSelection() {
    var sel = window.getSelection();
    var ranges = [];

    if (sel.rangeCount) {
      for (var i = 0, len = sel.rangeCount; i < len; ++i) {
        ranges.push(sel.getRangeAt(i));
      }
    }
    return ranges;
  };
  _replaceSelection = function replaceSelection(content) {
    var range = void 0;
    var sel = window.getSelection();
    var node = typeof content === 'string' ? doc.createTextNode(content) : content;
    if (sel.getRangeAt && sel.rangeCount) {
      range = sel.getRangeAt(0);
      range.deleteContents();
      range.insertNode(doc.createTextNode(' '));
      range.insertNode(node);
      range.setStart(node, 0);

      window.setTimeout(function () {
        range = doc.createRange();
        range.setStartAfter(node);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
      }, 0);
    }
  };
} else if (doc.selection && doc.selection.createRange) {
  _restoreSelection = function restoreSelection(savedSelection) {
    if (savedSelection) {
      savedSelection.select();
    }
  };
  _saveSelection = function saveSelection() {
    var sel = doc.selection;
    return sel.type.toLowerCase() !== 'none' ? sel.createRange() : null;
  };
  _replaceSelection = function replaceSelection(content) {
    var range = doc.selection.createRange();
    if (typeof content === 'string') {
      range.text = content;
    } else {
      range.pasteHTML(content.outerHTML);
    }
  };
}

var RangeUtil = new (function () {
  function _class() {
    classCallCheck(this, _class);
  }

  createClass(_class, [{
    key: 'escapeRegex',
    value: function escapeRegex(str) {
      return ('' + str).replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }
  }, {
    key: 'htmlEntities',
    value: function htmlEntities(str) {
      return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
  }, {
    key: 'restoreSelection',
    value: function restoreSelection() {
      var _restoreSelection2;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_restoreSelection2 = _restoreSelection).call.apply(_restoreSelection2, [null].concat(args));
    }
  }, {
    key: 'saveSelection',
    value: function saveSelection() {
      var _saveSelection2;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return (_saveSelection2 = _saveSelection).call.apply(_saveSelection2, [null].concat(args));
    }
  }, {
    key: 'replaceSelection',
    value: function replaceSelection() {
      var _replaceSelection2;

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return (_replaceSelection2 = _replaceSelection).call.apply(_replaceSelection2, [null].concat(args));
    }
  }]);
  return _class;
}())();

var str = '{"表情":{":bowtie:":"bowtie.png",":smile:":"smile.png",":laughing:":"laughing.png",":blush:":"blush.png",":smiley:":"smiley.png",":relaxed:":"relaxed.png",":smirk:":"smirk.png",":heart_eyes:":"heart_eyes.png",":kissing_heart:":"kissing_heart.png",":kissing_closed_eyes:":"kissing_closed_eyes.png",":flushed:":"flushed.png",":relieved:":"relieved.png",":satisfied:":"satisfied.png",":grin:":"grin.png",":wink:":"wink.png",":stuck_out_tongue_winking_eye:":"stuck_out_tongue_winking_eye.png",":stuck_out_tongue_closed_eyes:":"stuck_out_tongue_closed_eyes.png",":grinning:":"grinning.png",":kissing:":"kissing.png",":kissing_smiling_eyes:":"kissing_smiling_eyes.png",":stuck_out_tongue:":"stuck_out_tongue.png",":sleeping:":"sleeping.png",":worried:":"worried.png",":frowning:":"frowning.png",":anguished:":"anguished.png",":open_mouth:":"open_mouth.png",":grimacing:":"grimacing.png",":confused:":"confused.png",":hushed:":"hushed.png",":expressionless:":"expressionless.png",":unamused:":"unamused.png",":sweat_smile:":"sweat_smile.png",":sweat:":"sweat.png",":disappointed_relieved:":"disappointed_relieved.png",":weary:":"weary.png",":pensive:":"pensive.png",":disappointed:":"disappointed.png",":confounded:":"confounded.png",":fearful:":"fearful.png",":cold_sweat:":"cold_sweat.png",":persevere:":"persevere.png",":cry:":"cry.png",":sob:":"sob.png",":joy:":"joy.png",":astonished:":"astonished.png",":scream:":"scream.png",":neckbeard:":"neckbeard.png",":tired_face:":"tired_face.png",":angry:":"angry.png",":rage:":"rage.png",":triumph:":"triumph.png",":sleepy:":"sleepy.png",":yum:":"yum.png",":mask:":"mask.png",":sunglasses:":"sunglasses.png",":dizzy_face:":"dizzy_face.png",":imp:":"imp.png",":smiling_imp:":"smiling_imp.png",":neutral_face:":"neutral_face.png",":no_mouth:":"no_mouth.png",":innocent:":"innocent.png",":alien:":"alien.png",":yellow_heart:":"yellow_heart.png",":blue_heart:":"blue_heart.png",":purple_heart:":"purple_heart.png",":heart:":"heart.png",":green_heart:":"green_heart.png",":broken_heart:":"broken_heart.png",":heartbeat:":"heartbeat.png",":heartpulse:":"heartpulse.png",":two_hearts:":"two_hearts.png",":revolving_hearts:":"revolving_hearts.png",":cupid:":"cupid.png",":sparkling_heart:":"sparkling_heart.png",":sparkles:":"sparkles.png",":star:":"star.png",":star2:":"star2.png",":dizzy:":"dizzy.png",":boom:":"boom.png",":collision:":"collision.png",":anger:":"anger.png",":exclamation:":"exclamation.png",":question:":"question.png",":grey_exclamation:":"grey_exclamation.png",":grey_question:":"grey_question.png",":zzz:":"zzz.png",":dash:":"dash.png",":sweat_drops:":"sweat_drops.png",":notes:":"notes.png",":musical_note:":"musical_note.png",":fire:":"fire.png",":shit:":"shit.png",":thumbsup:":"thumbsup.png",":thumbsdown:":"thumbsdown.png",":ok_hand:":"ok_hand.png",":punch:":"punch.png",":facepunch:":"facepunch.png",":fist:":"fist.png",":v:":"v.png",":wave:":"wave.png",":hand:":"hand.png",":raised_hand:":"raised_hand.png",":open_hands:":"open_hands.png",":point_up:":"point_up.png",":point_down:":"point_down.png",":point_left:":"point_left.png",":point_right:":"point_right.png",":raised_hands:":"raised_hands.png",":pray:":"pray.png",":point_up_2:":"point_up_2.png",":clap:":"clap.png",":muscle:":"muscle.png",":metal:":"metal.png",":fu:":"fu.png",":runner:":"runner.png",":running:":"running.png",":couple:":"couple.png",":family:":"family.png",":two_men_holding_hands:":"two_men_holding_hands.png",":two_women_holding_hands:":"two_women_holding_hands.png",":dancer:":"dancer.png",":dancers:":"dancers.png",":ok_woman:":"ok_woman.png",":no_good:":"no_good.png",":information_desk_person:":"information_desk_person.png",":raising_hand:":"raising_hand.png",":bride_with_veil:":"bride_with_veil.png",":person_with_pouting_face:":"person_with_pouting_face.png",":person_frowning:":"person_frowning.png",":bow:":"bow.png",":couplekiss:":"couplekiss.png",":couple_with_heart:":"couple_with_heart.png",":massage:":"massage.png",":haircut:":"haircut.png",":nail_care:":"nail_care.png",":boy:":"boy.png",":girl:":"girl.png",":woman:":"woman.png",":man:":"man.png",":baby:":"baby.png",":older_woman:":"older_woman.png",":older_man:":"older_man.png",":person_with_blond_hair:":"person_with_blond_hair.png",":man_with_gua_pi_mao:":"man_with_gua_pi_mao.png",":man_with_turban:":"man_with_turban.png",":construction_worker:":"construction_worker.png",":cop:":"cop.png",":angel:":"angel.png",":princess:":"princess.png",":smiley_cat:":"smiley_cat.png",":smile_cat:":"smile_cat.png",":heart_eyes_cat:":"heart_eyes_cat.png",":kissing_cat:":"kissing_cat.png",":smirk_cat:":"smirk_cat.png",":scream_cat:":"scream_cat.png",":crying_cat_face:":"crying_cat_face.png",":joy_cat:":"joy_cat.png",":pouting_cat:":"pouting_cat.png",":japanese_ogre:":"japanese_ogre.png",":japanese_goblin:":"japanese_goblin.png",":see_no_evil:":"see_no_evil.png",":hear_no_evil:":"hear_no_evil.png",":speak_no_evil:":"speak_no_evil.png",":guardsman:":"guardsman.png",":skull:":"skull.png",":feet:":"feet.png",":lips:":"lips.png",":kiss:":"kiss.png",":droplet:":"droplet.png",":ear:":"ear.png",":eyes:":"eyes.png",":nose:":"nose.png",":tongue:":"tongue.png",":love_letter:":"love_letter.png",":bust_in_silhouette:":"bust_in_silhouette.png",":busts_in_silhouette:":"busts_in_silhouette.png",":speech_balloon:":"speech_balloon.png",":thought_balloon:":"thought_balloon.png",":feelsgood:":"feelsgood.png",":finnadie:":"finnadie.png",":goberserk:":"goberserk.png",":godmode:":"godmode.png",":hurtrealbad:":"hurtrealbad.png",":rage1:":"rage1.png",":rage2:":"rage2.png",":rage3:":"rage3.png",":rage4:":"rage4.png",":suspect:":"suspect.png",":trollface:":"trollface.png"},"自然":{":sunny:":"sunny.png",":umbrella:":"umbrella.png",":cloud:":"cloud.png",":snowflake:":"snowflake.png",":snowman:":"snowman.png",":zap:":"zap.png",":cyclone:":"cyclone.png",":foggy:":"foggy.png",":ocean:":"ocean.png",":cat:":"cat.png",":dog:":"dog.png",":mouse:":"mouse.png",":hamster:":"hamster.png",":rabbit:":"rabbit.png",":wolf:":"wolf.png",":frog:":"frog.png",":tiger:":"tiger.png",":koala:":"koala.png",":bear:":"bear.png",":pig:":"pig.png",":pig_nose:":"pig_nose.png",":cow:":"cow.png",":boar:":"boar.png",":monkey_face:":"monkey_face.png",":monkey:":"monkey.png",":horse:":"horse.png",":racehorse:":"racehorse.png",":camel:":"camel.png",":sheep:":"sheep.png",":elephant:":"elephant.png",":panda_face:":"panda_face.png",":snake:":"snake.png",":bird:":"bird.png",":baby_chick:":"baby_chick.png",":hatched_chick:":"hatched_chick.png",":hatching_chick:":"hatching_chick.png",":chicken:":"chicken.png",":penguin:":"penguin.png",":turtle:":"turtle.png",":bug:":"bug.png",":honeybee:":"honeybee.png",":ant:":"ant.png",":beetle:":"beetle.png",":snail:":"snail.png",":octopus:":"octopus.png",":tropical_fish:":"tropical_fish.png",":fish:":"fish.png",":whale:":"whale.png",":whale2:":"whale2.png",":dolphin:":"dolphin.png",":cow2:":"cow2.png",":ram:":"ram.png",":rat:":"rat.png",":water_buffalo:":"water_buffalo.png",":tiger2:":"tiger2.png",":rabbit2:":"rabbit2.png",":dragon:":"dragon.png",":goat:":"goat.png",":rooster:":"rooster.png",":dog2:":"dog2.png",":pig2:":"pig2.png",":mouse2:":"mouse2.png",":ox:":"ox.png",":dragon_face:":"dragon_face.png",":blowfish:":"blowfish.png",":crocodile:":"crocodile.png",":dromedary_camel:":"dromedary_camel.png",":leopard:":"leopard.png",":cat2:":"cat2.png",":poodle:":"poodle.png",":paw_prints:":"paw_prints.png",":bouquet:":"bouquet.png",":cherry_blossom:":"cherry_blossom.png",":tulip:":"tulip.png",":four_leaf_clover:":"four_leaf_clover.png",":rose:":"rose.png",":sunflower:":"sunflower.png",":hibiscus:":"hibiscus.png",":maple_leaf:":"maple_leaf.png",":leaves:":"leaves.png",":fallen_leaf:":"fallen_leaf.png",":herb:":"herb.png",":mushroom:":"mushroom.png",":cactus:":"cactus.png",":palm_tree:":"palm_tree.png",":evergreen_tree:":"evergreen_tree.png",":deciduous_tree:":"deciduous_tree.png",":chestnut:":"chestnut.png",":seedling:":"seedling.png",":blossom:":"blossom.png",":ear_of_rice:":"ear_of_rice.png",":shell:":"shell.png",":globe_with_meridians:":"globe_with_meridians.png",":sun_with_face:":"sun_with_face.png",":full_moon_with_face:":"full_moon_with_face.png",":new_moon_with_face:":"new_moon_with_face.png",":new_moon:":"new_moon.png",":waxing_crescent_moon:":"waxing_crescent_moon.png",":first_quarter_moon:":"first_quarter_moon.png",":waxing_gibbous_moon:":"waxing_gibbous_moon.png",":full_moon:":"full_moon.png",":waning_gibbous_moon:":"waning_gibbous_moon.png",":last_quarter_moon:":"last_quarter_moon.png",":waning_crescent_moon:":"waning_crescent_moon.png",":last_quarter_moon_with_face:":"last_quarter_moon_with_face.png",":first_quarter_moon_with_face:":"first_quarter_moon_with_face.png",":crescent_moon:":"crescent_moon.png",":earth_africa:":"earth_africa.png",":earth_americas:":"earth_americas.png",":earth_asia:":"earth_asia.png",":volcano:":"volcano.png",":milky_way:":"milky_way.png",":partly_sunny:":"partly_sunny.png",":octocat:":"octocat.png",":squirrel:":"squirrel.png"},"物品":{":bamboo:":"bamboo.png",":gift_heart:":"gift_heart.png",":dolls:":"dolls.png",":school_satchel:":"school_satchel.png",":mortar_board:":"mortar_board.png",":flags:":"flags.png",":fireworks:":"fireworks.png",":sparkler:":"sparkler.png",":wind_chime:":"wind_chime.png",":rice_scene:":"rice_scene.png",":jack_o_lantern:":"jack_o_lantern.png",":ghost:":"ghost.png",":santa:":"santa.png",":christmas_tree:":"christmas_tree.png",":gift:":"gift.png",":bell:":"bell.png",":no_bell:":"no_bell.png",":tanabata_tree:":"tanabata_tree.png",":tada:":"tada.png",":confetti_ball:":"confetti_ball.png",":balloon:":"balloon.png",":crystal_ball:":"crystal_ball.png",":cd:":"cd.png",":dvd:":"dvd.png",":floppy_disk:":"floppy_disk.png",":camera:":"camera.png",":video_camera:":"video_camera.png",":movie_camera:":"movie_camera.png",":computer:":"computer.png",":tv:":"tv.png",":iphone:":"iphone.png",":phone:":"phone.png",":telephone:":"telephone.png",":telephone_receiver:":"telephone_receiver.png",":pager:":"pager.png",":fax:":"fax.png",":minidisc:":"minidisc.png",":vhs:":"vhs.png",":sound:":"sound.png",":speaker:":"speaker.png",":mute:":"mute.png",":loudspeaker:":"loudspeaker.png",":mega:":"mega.png",":hourglass:":"hourglass.png",":hourglass_flowing_sand:":"hourglass_flowing_sand.png",":alarm_clock:":"alarm_clock.png",":watch:":"watch.png",":radio:":"radio.png",":satellite:":"satellite.png",":loop:":"loop.png",":mag:":"mag.png",":mag_right:":"mag_right.png",":unlock:":"unlock.png",":lock:":"lock.png",":lock_with_ink_pen:":"lock_with_ink_pen.png",":closed_lock_with_key:":"closed_lock_with_key.png",":key:":"key.png",":bulb:":"bulb.png",":flashlight:":"flashlight.png",":high_brightness:":"high_brightness.png",":low_brightness:":"low_brightness.png",":electric_plug:":"electric_plug.png",":battery:":"battery.png",":calling:":"calling.png",":email:":"email.png",":mailbox:":"mailbox.png",":postbox:":"postbox.png",":bath:":"bath.png",":bathtub:":"bathtub.png",":shower:":"shower.png",":toilet:":"toilet.png",":wrench:":"wrench.png",":nut_and_bolt:":"nut_and_bolt.png",":hammer:":"hammer.png",":seat:":"seat.png",":moneybag:":"moneybag.png",":yen:":"yen.png",":dollar:":"dollar.png",":pound:":"pound.png",":euro:":"euro.png",":credit_card:":"credit_card.png",":money_with_wings:":"money_with_wings.png",":e-mail:":"e-mail.png",":inbox_tray:":"inbox_tray.png",":outbox_tray:":"outbox_tray.png",":envelope:":"envelope.png",":incoming_envelope:":"incoming_envelope.png",":postal_horn:":"postal_horn.png",":mailbox_closed:":"mailbox_closed.png",":mailbox_with_mail:":"mailbox_with_mail.png",":mailbox_with_no_mail:":"mailbox_with_no_mail.png",":package:":"package.png",":door:":"door.png",":smoking:":"smoking.png",":bomb:":"bomb.png",":gun:":"gun.png",":hocho:":"hocho.png",":pill:":"pill.png",":syringe:":"syringe.png",":page_facing_up:":"page_facing_up.png",":page_with_curl:":"page_with_curl.png",":bookmark_tabs:":"bookmark_tabs.png",":bar_chart:":"bar_chart.png",":chart_with_upwards_trend:":"chart_with_upwards_trend.png",":chart_with_downwards_trend:":"chart_with_downwards_trend.png",":scroll:":"scroll.png",":clipboard:":"clipboard.png",":calendar:":"calendar.png",":date:":"date.png",":card_index:":"card_index.png",":file_folder:":"file_folder.png",":open_file_folder:":"open_file_folder.png",":scissors:":"scissors.png",":pushpin:":"pushpin.png",":paperclip:":"paperclip.png",":black_nib:":"black_nib.png",":pencil2:":"pencil2.png",":straight_ruler:":"straight_ruler.png",":triangular_ruler:":"triangular_ruler.png",":closed_book:":"closed_book.png",":green_book:":"green_book.png",":blue_book:":"blue_book.png",":orange_book:":"orange_book.png",":notebook:":"notebook.png",":notebook_with_decorative_cover:":"notebook_with_decorative_cover.png",":ledger:":"ledger.png",":books:":"books.png",":bookmark:":"bookmark.png",":name_badge:":"name_badge.png",":microscope:":"microscope.png",":telescope:":"telescope.png",":newspaper:":"newspaper.png",":football:":"football.png",":basketball:":"basketball.png",":soccer:":"soccer.png",":baseball:":"baseball.png",":tennis:":"tennis.png",":8ball:":"8ball.png",":rugby_football:":"rugby_football.png",":bowling:":"bowling.png",":golf:":"golf.png",":mountain_bicyclist:":"mountain_bicyclist.png",":bicyclist:":"bicyclist.png",":horse_racing:":"horse_racing.png",":snowboarder:":"snowboarder.png",":swimmer:":"swimmer.png",":surfer:":"surfer.png",":ski:":"ski.png",":spades:":"spades.png",":hearts:":"hearts.png",":clubs:":"clubs.png",":diamonds:":"diamonds.png",":gem:":"gem.png",":ring:":"ring.png",":trophy:":"trophy.png",":musical_score:":"musical_score.png",":musical_keyboard:":"musical_keyboard.png",":violin:":"violin.png",":space_invader:":"space_invader.png",":video_game:":"video_game.png",":black_joker:":"black_joker.png",":flower_playing_cards:":"flower_playing_cards.png",":game_die:":"game_die.png",":dart:":"dart.png",":mahjong:":"mahjong.png",":clapper:":"clapper.png",":memo:":"memo.png",":pencil:":"pencil.png",":book:":"book.png",":art:":"art.png",":microphone:":"microphone.png",":headphones:":"headphones.png",":trumpet:":"trumpet.png",":saxophone:":"saxophone.png",":guitar:":"guitar.png",":shoe:":"shoe.png",":sandal:":"sandal.png",":high_heel:":"high_heel.png",":lipstick:":"lipstick.png",":boot:":"boot.png",":shirt:":"shirt.png",":tshirt:":"tshirt.png",":necktie:":"necktie.png",":womans_clothes:":"womans_clothes.png",":dress:":"dress.png",":running_shirt_with_sash:":"running_shirt_with_sash.png",":jeans:":"jeans.png",":kimono:":"kimono.png",":bikini:":"bikini.png",":ribbon:":"ribbon.png",":tophat:":"tophat.png",":crown:":"crown.png",":womans_hat:":"womans_hat.png",":mans_shoe:":"mans_shoe.png",":closed_umbrella:":"closed_umbrella.png",":briefcase:":"briefcase.png",":handbag:":"handbag.png",":pouch:":"pouch.png",":purse:":"purse.png",":eyeglasses:":"eyeglasses.png",":fishing_pole_and_fish:":"fishing_pole_and_fish.png",":coffee:":"coffee.png",":tea:":"tea.png",":sake:":"sake.png",":baby_bottle:":"baby_bottle.png",":beer:":"beer.png",":beers:":"beers.png",":cocktail:":"cocktail.png",":tropical_drink:":"tropical_drink.png",":wine_glass:":"wine_glass.png",":fork_and_knife:":"fork_and_knife.png",":pizza:":"pizza.png",":hamburger:":"hamburger.png",":fries:":"fries.png",":poultry_leg:":"poultry_leg.png",":meat_on_bone:":"meat_on_bone.png",":spaghetti:":"spaghetti.png",":curry:":"curry.png",":fried_shrimp:":"fried_shrimp.png",":bento:":"bento.png",":sushi:":"sushi.png",":fish_cake:":"fish_cake.png",":rice_ball:":"rice_ball.png",":rice_cracker:":"rice_cracker.png",":rice:":"rice.png",":ramen:":"ramen.png",":stew:":"stew.png",":oden:":"oden.png",":dango:":"dango.png",":egg:":"egg.png",":bread:":"bread.png",":doughnut:":"doughnut.png",":custard:":"custard.png",":icecream:":"icecream.png",":ice_cream:":"ice_cream.png",":shaved_ice:":"shaved_ice.png",":birthday:":"birthday.png",":cake:":"cake.png",":cookie:":"cookie.png",":chocolate_bar:":"chocolate_bar.png",":candy:":"candy.png",":lollipop:":"lollipop.png",":honey_pot:":"honey_pot.png",":apple:":"apple.png",":green_apple:":"green_apple.png",":tangerine:":"tangerine.png",":lemon:":"lemon.png",":cherries:":"cherries.png",":grapes:":"grapes.png",":watermelon:":"watermelon.png",":strawberry:":"strawberry.png",":peach:":"peach.png",":melon:":"melon.png",":banana:":"banana.png",":pear:":"pear.png",":pineapple:":"pineapple.png",":sweet_potato:":"sweet_potato.png",":eggplant:":"eggplant.png",":tomato:":"tomato.png",":corn:":"corn.png"},"地点":{":house:":"house.png",":house_with_garden:":"house_with_garden.png",":school:":"school.png",":office:":"office.png",":post_office:":"post_office.png",":hospital:":"hospital.png",":bank:":"bank.png",":convenience_store:":"convenience_store.png",":love_hotel:":"love_hotel.png",":hotel:":"hotel.png",":wedding:":"wedding.png",":church:":"church.png",":department_store:":"department_store.png",":european_post_office:":"european_post_office.png",":city_sunrise:":"city_sunrise.png",":city_sunset:":"city_sunset.png",":japanese_castle:":"japanese_castle.png",":european_castle:":"european_castle.png",":tent:":"tent.png",":factory:":"factory.png",":tokyo_tower:":"tokyo_tower.png",":japan:":"japan.png",":mount_fuji:":"mount_fuji.png",":sunrise_over_mountains:":"sunrise_over_mountains.png",":sunrise:":"sunrise.png",":stars:":"stars.png",":statue_of_liberty:":"statue_of_liberty.png",":bridge_at_night:":"bridge_at_night.png",":carousel_horse:":"carousel_horse.png",":rainbow:":"rainbow.png",":ferris_wheel:":"ferris_wheel.png",":fountain:":"fountain.png",":roller_coaster:":"roller_coaster.png",":ship:":"ship.png",":speedboat:":"speedboat.png",":boat:":"boat.png",":sailboat:":"sailboat.png",":rowboat:":"rowboat.png",":anchor:":"anchor.png",":rocket:":"rocket.png",":airplane:":"airplane.png",":helicopter:":"helicopter.png",":steam_locomotive:":"steam_locomotive.png",":tram:":"tram.png",":mountain_railway:":"mountain_railway.png",":bike:":"bike.png",":aerial_tramway:":"aerial_tramway.png",":suspension_railway:":"suspension_railway.png",":mountain_cableway:":"mountain_cableway.png",":tractor:":"tractor.png",":blue_car:":"blue_car.png",":oncoming_automobile:":"oncoming_automobile.png",":car:":"car.png",":red_car:":"red_car.png",":taxi:":"taxi.png",":oncoming_taxi:":"oncoming_taxi.png",":articulated_lorry:":"articulated_lorry.png",":bus:":"bus.png",":oncoming_bus:":"oncoming_bus.png",":rotating_light:":"rotating_light.png",":police_car:":"police_car.png",":oncoming_police_car:":"oncoming_police_car.png",":fire_engine:":"fire_engine.png",":ambulance:":"ambulance.png",":minibus:":"minibus.png",":truck:":"truck.png",":train:":"train.png",":station:":"station.png",":train2:":"train2.png",":bullettrain_front:":"bullettrain_front.png",":bullettrain_side:":"bullettrain_side.png",":light_rail:":"light_rail.png",":monorail:":"monorail.png",":railway_car:":"railway_car.png",":trolleybus:":"trolleybus.png",":ticket:":"ticket.png",":fuelpump:":"fuelpump.png",":vertical_traffic_light:":"vertical_traffic_light.png",":traffic_light:":"traffic_light.png",":warning:":"warning.png",":construction:":"construction.png",":beginner:":"beginner.png",":atm:":"atm.png",":slot_machine:":"slot_machine.png",":busstop:":"busstop.png",":barber:":"barber.png",":hotsprings:":"hotsprings.png",":checkered_flag:":"checkered_flag.png",":crossed_flags:":"crossed_flags.png",":izakaya_lantern:":"izakaya_lantern.png",":moyai:":"moyai.png",":circus_tent:":"circus_tent.png",":performing_arts:":"performing_arts.png",":round_pushpin:":"round_pushpin.png",":triangular_flag_on_post:":"triangular_flag_on_post.png",":jp:":"jp.png",":kr:":"kr.png",":cn:":"cn.png",":us:":"us.png",":fr:":"fr.png",":es:":"es.png",":it:":"it.png",":ru:":"ru.png",":gb:":"gb.png",":uk:":"uk.png",":de:":"de.png"},"符号":{":one:":"one.png",":two:":"two.png",":three:":"three.png",":four:":"four.png",":five:":"five.png",":six:":"six.png",":seven:":"seven.png",":eight:":"eight.png",":nine:":"nine.png",":keycap_ten:":"keycap_ten.png",":1234:":"1234.png",":zero:":"zero.png",":hash:":"hash.png",":symbols:":"symbols.png",":arrow_backward:":"arrow_backward.png",":arrow_down:":"arrow_down.png",":arrow_forward:":"arrow_forward.png",":arrow_left:":"arrow_left.png",":capital_abcd:":"capital_abcd.png",":abcd:":"abcd.png",":abc:":"abc.png",":arrow_lower_left:":"arrow_lower_left.png",":arrow_lower_right:":"arrow_lower_right.png",":arrow_right:":"arrow_right.png",":arrow_up:":"arrow_up.png",":arrow_upper_left:":"arrow_upper_left.png",":arrow_upper_right:":"arrow_upper_right.png",":arrow_double_down:":"arrow_double_down.png",":arrow_double_up:":"arrow_double_up.png",":arrow_down_small:":"arrow_down_small.png",":arrow_heading_down:":"arrow_heading_down.png",":arrow_heading_up:":"arrow_heading_up.png",":leftwards_arrow_with_hook:":"leftwards_arrow_with_hook.png",":arrow_right_hook:":"arrow_right_hook.png",":left_right_arrow:":"left_right_arrow.png",":arrow_up_down:":"arrow_up_down.png",":arrow_up_small:":"arrow_up_small.png",":arrows_clockwise:":"arrows_clockwise.png",":arrows_counterclockwise:":"arrows_counterclockwise.png",":rewind:":"rewind.png",":fast_forward:":"fast_forward.png",":information_source:":"information_source.png",":ok:":"ok.png",":twisted_rightwards_arrows:":"twisted_rightwards_arrows.png",":repeat:":"repeat.png",":repeat_one:":"repeat_one.png",":new:":"new.png",":top:":"top.png",":up:":"up.png",":cool:":"cool.png",":free:":"free.png",":ng:":"ng.png",":cinema:":"cinema.png",":koko:":"koko.png",":signal_strength:":"signal_strength.png",":u5272:":"u5272.png",":u5408:":"u5408.png",":u55b6:":"u55b6.png",":u6307:":"u6307.png",":u6708:":"u6708.png",":u6709:":"u6709.png",":u6e80:":"u6e80.png",":u7121:":"u7121.png",":u7533:":"u7533.png",":u7a7a:":"u7a7a.png",":u7981:":"u7981.png",":sa:":"sa.png",":restroom:":"restroom.png",":mens:":"mens.png",":womens:":"womens.png",":baby_symbol:":"baby_symbol.png",":no_smoking:":"no_smoking.png",":parking:":"parking.png",":wheelchair:":"wheelchair.png",":metro:":"metro.png",":baggage_claim:":"baggage_claim.png",":accept:":"accept.png",":wc:":"wc.png",":potable_water:":"potable_water.png",":put_litter_in_its_place:":"put_litter_in_its_place.png",":secret:":"secret.png",":congratulations:":"congratulations.png",":m:":"m.png",":passport_control:":"passport_control.png",":left_luggage:":"left_luggage.png",":customs:":"customs.png",":ideograph_advantage:":"ideograph_advantage.png",":cl:":"cl.png",":sos:":"sos.png",":id:":"id.png",":no_entry_sign:":"no_entry_sign.png",":underage:":"underage.png",":no_mobile_phones:":"no_mobile_phones.png",":do_not_litter:":"do_not_litter.png",":non-potable_water:":"non-potable_water.png",":no_bicycles:":"no_bicycles.png",":no_pedestrians:":"no_pedestrians.png",":children_crossing:":"children_crossing.png",":no_entry:":"no_entry.png",":eight_spoked_asterisk:":"eight_spoked_asterisk.png",":sparkle:":"sparkle.png",":eight_pointed_black_star:":"eight_pointed_black_star.png",":heart_decoration:":"heart_decoration.png",":vs:":"vs.png",":vibration_mode:":"vibration_mode.png",":mobile_phone_off:":"mobile_phone_off.png",":chart:":"chart.png",":currency_exchange:":"currency_exchange.png",":aries:":"aries.png",":taurus:":"taurus.png",":gemini:":"gemini.png",":cancer:":"cancer.png",":leo:":"leo.png",":virgo:":"virgo.png",":libra:":"libra.png",":scorpius:":"scorpius.png",":sagittarius:":"sagittarius.png",":capricorn:":"capricorn.png",":aquarius:":"aquarius.png",":pisces:":"pisces.png",":ophiuchus:":"ophiuchus.png",":six_pointed_star:":"six_pointed_star.png",":negative_squared_cross_mark:":"negative_squared_cross_mark.png",":a:":"a.png",":b:":"b.png",":ab:":"ab.png",":o2:":"o2.png",":diamond_shape_with_a_dot_inside:":"diamond_shape_with_a_dot_inside.png",":recycle:":"recycle.png",":end:":"end.png",":back:":"back.png",":on:":"on.png",":soon:":"soon.png",":clock1:":"clock1.png",":clock130:":"clock130.png",":clock10:":"clock10.png",":clock1030:":"clock1030.png",":clock11:":"clock11.png",":clock1130:":"clock1130.png",":clock12:":"clock12.png",":clock1230:":"clock1230.png",":clock2:":"clock2.png",":clock230:":"clock230.png",":clock3:":"clock3.png",":clock330:":"clock330.png",":clock4:":"clock4.png",":clock430:":"clock430.png",":clock5:":"clock5.png",":clock530:":"clock530.png",":clock6:":"clock6.png",":clock630:":"clock630.png",":clock7:":"clock7.png",":clock730:":"clock730.png",":clock8:":"clock8.png",":clock830:":"clock830.png",":clock9:":"clock9.png",":clock930:":"clock930.png",":heavy_dollar_sign:":"heavy_dollar_sign.png",":copyright:":"copyright.png",":registered:":"registered.png",":tm:":"tm.png",":x:":"x.png",":heavy_exclamation_mark:":"heavy_exclamation_mark.png",":bangbang:":"bangbang.png",":interrobang:":"interrobang.png",":o:":"o.png",":heavy_multiplication_x:":"heavy_multiplication_x.png",":heavy_plus_sign:":"heavy_plus_sign.png",":heavy_minus_sign:":"heavy_minus_sign.png",":heavy_division_sign:":"heavy_division_sign.png",":white_flower:":"white_flower.png",":100:":"100.png",":heavy_check_mark:":"heavy_check_mark.png",":ballot_box_with_check:":"ballot_box_with_check.png",":radio_button:":"radio_button.png",":link:":"link.png",":curly_loop:":"curly_loop.png",":wavy_dash:":"wavy_dash.png",":part_alternation_mark:":"part_alternation_mark.png",":trident:":"trident.png",":black_small_square:":"black_small_square.png",":white_small_square:":"white_small_square.png",":black_medium_small_square:":"black_medium_small_square.png",":white_medium_small_square:":"white_medium_small_square.png",":black_medium_square:":"black_medium_square.png",":white_medium_square:":"white_medium_square.png",":black_large_square:":"black_square.png",":white_large_square:":"white_large_square.png",":white_check_mark:":"white_check_mark.png",":black_square_button:":"black_square_button.png",":white_square_button:":"white_square_button.png",":black_circle:":"black_circle.png",":white_circle:":"white_circle.png",":red_circle:":"red_circle.png",":large_blue_circle:":"large_blue_circle.png",":large_blue_diamond:":"large_blue_diamond.png",":large_orange_diamond:":"large_orange_diamond.png",":small_blue_diamond:":"small_blue_diamond.png",":small_orange_diamond:":"small_orange_diamond.png",":small_red_triangle:":"small_red_triangle.png",":small_red_triangle_down:":"small_red_triangle_down.png",":shipit:":"shipit.png"}}';

var _data = JSON.parse(str);

// referenced from https://github.com/ElemeFE/element/blob/dev/src/utils/clickoutside.js#L22-L63
var clickoutside = {
  inserted: function inserted(el, _ref, _ref2) {
    var expression = _ref.expression;
    var elm = _ref2.elm,
        context = _ref2.context;

    el.documentHandler = function (e) {
      if (elm.contains(e.target)) {
        return false;
      }
      if (expression) {
        var hide = context[expression](e);
        if (hide) {
          document.removeEventListener('click', el.documentHandler);
          el.documentHandler = null;
        }
      }
    };
    document.addEventListener('click', el.documentHandler);
  },
  unbind: function unbind(el) {
    document.removeEventListener('click', el.documentHandler);
  }
};

// copy from emojilib https://github.com/muan/emojilib/blob/master/emojis.json
// because use npm package directly may cause some problems like make the source code bigger
// so I copy the map directly.
var lib = { 100: { char: '💯' },
  1234: { char: '🔢' },
  grinning: { char: '😀' },
  grimacing: { char: '😬' },
  grin: { char: '😁' },
  joy: { char: '😂' },
  rofl: { char: '🤣' },
  smiley: { char: '😃' },
  smile: { char: '😄' },
  sweat_smile: { char: '😅' },
  laughing: { char: '😆' },
  innocent: { char: '😇' },
  wink: { char: '😉' },
  blush: { char: '😊' },
  slightly_smiling_face: { char: '🙂' },
  upside_down_face: { char: '🙃' },
  relaxed: { char: '☺️' },
  yum: { char: '😋' },
  relieved: { char: '😌' },
  heart_eyes: { char: '😍' },
  kissing_heart: { char: '😘' },
  kissing: { char: '😗' },
  kissing_smiling_eyes: { char: '😙' },
  kissing_closed_eyes: { char: '😚' },
  stuck_out_tongue_winking_eye: { char: '😜' },
  stuck_out_tongue_closed_eyes: { char: '😝' },
  stuck_out_tongue: { char: '😛' },
  money_mouth_face: { char: '🤑' },
  nerd_face: { char: '🤓' },
  sunglasses: { char: '😎' },
  clown_face: { char: '🤡' },
  cowboy_hat_face: { char: '🤠' },
  hugs: { char: '🤗' },
  smirk: { char: '😏' },
  no_mouth: { char: '😶' },
  neutral_face: { char: '😐' },
  expressionless: { char: '😑' },
  unamused: { char: '😒' },
  roll_eyes: { char: '🙄' },
  thinking: { char: '🤔' },
  lying_face: { char: '🤥' },
  flushed: { char: '😳' },
  disappointed: { char: '😞' },
  worried: { char: '😟' },
  angry: { char: '😠' },
  rage: { char: '😡' },
  pensive: { char: '😔' },
  confused: { char: '😕' },
  slightly_frowning_face: { char: '🙁' },
  frowning_face: { char: '☹' },
  persevere: { char: '😣' },
  confounded: { char: '😖' },
  tired_face: { char: '😫' },
  weary: { char: '😩' },
  triumph: { char: '😤' },
  open_mouth: { char: '😮' },
  scream: { char: '😱' },
  fearful: { char: '😨' },
  cold_sweat: { char: '😰' },
  hushed: { char: '😯' },
  frowning: { char: '😦' },
  anguished: { char: '😧' },
  cry: { char: '😢' },
  disappointed_relieved: { char: '😥' },
  drooling_face: { char: '🤤' },
  sleepy: { char: '😪' },
  sweat: { char: '😓' },
  sob: { char: '😭' },
  dizzy_face: { char: '😵' },
  astonished: { char: '😲' },
  zipper_mouth_face: { char: '🤐' },
  nauseated_face: { char: '🤢' },
  sneezing_face: { char: '🤧' },
  mask: { char: '😷' },
  face_with_thermometer: { char: '🤒' },
  face_with_head_bandage: { char: '🤕' },
  sleeping: { char: '😴' },
  zzz: { char: '💤' },
  poop: { char: '💩' },
  smiling_imp: { char: '😈' },
  imp: { char: '👿' },
  japanese_ogre: { char: '👹' },
  japanese_goblin: { char: '👺' },
  skull: { char: '💀' },
  ghost: { char: '👻' },
  alien: { char: '👽' },
  robot: { char: '🤖' },
  smiley_cat: { char: '😺' },
  smile_cat: { char: '😸' },
  joy_cat: { char: '😹' },
  heart_eyes_cat: { char: '😻' },
  smirk_cat: { char: '😼' },
  kissing_cat: { char: '😽' },
  scream_cat: { char: '🙀' },
  crying_cat_face: { char: '😿' },
  pouting_cat: { char: '😾' },
  raised_hands: { char: '🙌' },
  clap: { char: '👏' },
  wave: { char: '👋' },
  call_me_hand: { char: '🤙' },
  '+1': { char: '👍' },
  '-1': { char: '👎' },
  facepunch: { char: '👊' },
  fist: { char: '✊' },
  fist_left: { char: '🤛' },
  fist_right: { char: '🤜' },
  v: { char: '✌' },
  ok_hand: { char: '👌' },
  raised_hand: { char: '✋' },
  raised_back_of_hand: { char: '🤚' },
  open_hands: { char: '👐' },
  muscle: { char: '💪' },
  pray: { char: '🙏' },
  handshake: { char: '🤝' },
  point_up: { char: '☝' },
  point_up_2: { char: '👆' },
  point_down: { char: '👇' },
  point_left: { char: '👈' },
  point_right: { char: '👉' },
  fu: { char: '🖕' },
  raised_hand_with_fingers_splayed: { char: '🖐' },
  metal: { char: '🤘' },
  crossed_fingers: { char: '🤞' },
  vulcan_salute: { char: '🖖' },
  writing_hand: { char: '✍' },
  selfie: { char: '🤳' },
  nail_care: { char: '💅' },
  lips: { char: '👄' },
  tongue: { char: '👅' },
  ear: { char: '👂' },
  nose: { char: '👃' },
  eye: { char: '👁' },
  eyes: { char: '👀' },
  bust_in_silhouette: { char: '👤' },
  busts_in_silhouette: { char: '👥' },
  speaking_head: { char: '🗣' },
  baby: { char: '👶' },
  boy: { char: '👦' },
  girl: { char: '👧' },
  man: { char: '👨' },
  woman: { char: '👩' },
  blonde_woman: { char: '👱‍♀️' },
  blonde_man: { char: '👱' },
  older_man: { char: '👴' },
  older_woman: { char: '👵' },
  man_with_gua_pi_mao: { char: '👲' },
  woman_with_turban: { char: '👳‍♀️' },
  man_with_turban: { char: '👳' },
  policewoman: { char: '👮‍♀️' },
  policeman: { char: '👮' },
  construction_worker_woman: { char: '👷‍♀️' },
  construction_worker_man: { char: '👷' },
  guardswoman: { char: '💂‍♀️' },
  guardsman: { char: '💂' },
  female_detective: { char: '🕵️‍♀️' },
  male_detective: { char: '🕵' },
  woman_health_worker: { char: '👩‍⚕️' },
  man_health_worker: { char: '👨‍⚕️' },
  woman_farmer: { char: '👩‍🌾' },
  man_farmer: { char: '👨‍🌾' },
  woman_cook: { char: '👩‍🍳' },
  man_cook: { char: '👨‍🍳' },
  woman_student: { char: '👩‍🎓' },
  man_student: { char: '👨‍🎓' },
  woman_singer: { char: '👩‍🎤' },
  man_singer: { char: '👨‍🎤' },
  woman_teacher: { char: '👩‍🏫' },
  man_teacher: { char: '👨‍🏫' },
  woman_factory_worker: { char: '👩‍🏭' },
  man_factory_worker: { char: '👨‍🏭' },
  woman_technologist: { char: '👩‍💻' },
  man_technologist: { char: '👨‍💻' },
  woman_office_worker: { char: '👩‍💼' },
  man_office_worker: { char: '👨‍💼' },
  woman_mechanic: { char: '👩‍🔧' },
  man_mechanic: { char: '👨‍🔧' },
  woman_scientist: { char: '👩‍🔬' },
  man_scientist: { char: '👨‍🔬' },
  woman_artist: { char: '👩‍🎨' },
  man_artist: { char: '👨‍🎨' },
  woman_firefighter: { char: '👩‍🚒' },
  man_firefighter: { char: '👨‍🚒' },
  woman_pilot: { char: '👩‍✈️' },
  man_pilot: { char: '👨‍✈️' },
  woman_astronaut: { char: '👩‍🚀' },
  man_astronaut: { char: '👨‍🚀' },
  woman_judge: { char: '👩‍⚖️' },
  man_judge: { char: '👨‍⚖️' },
  mrs_claus: { char: '🤶' },
  santa: { char: '🎅' },
  angel: { char: '👼' },
  pregnant_woman: { char: '🤰' },
  princess: { char: '👸' },
  prince: { char: '🤴' },
  bride_with_veil: { char: '👰' },
  man_in_tuxedo: { char: '🤵' },
  running_woman: { char: '🏃‍♀️' },
  running_man: { char: '🏃' },
  walking_woman: { char: '🚶‍♀️' },
  walking_man: { char: '🚶' },
  dancer: { char: '💃' },
  man_dancing: { char: '🕺' },
  dancing_women: { char: '👯' },
  dancing_men: { char: '👯‍♂️' },
  couple: { char: '👫' },
  two_men_holding_hands: { char: '👬' },
  two_women_holding_hands: { char: '👭' },
  bowing_woman: { char: '🙇‍♀️' },
  bowing_man: { char: '🙇' },
  man_facepalming: { char: '🤦' },
  woman_facepalming: { char: '🤦‍♀️' },
  woman_shrugging: { char: '🤷' },
  man_shrugging: { char: '🤷‍♂️' },
  tipping_hand_woman: { char: '💁' },
  tipping_hand_man: { char: '💁‍♂️' },
  no_good_woman: { char: '🙅' },
  no_good_man: { char: '🙅‍♂️' },
  ok_woman: { char: '🙆' },
  ok_man: { char: '🙆‍♂️' },
  raising_hand_woman: { char: '🙋' },
  raising_hand_man: { char: '🙋‍♂️' },
  pouting_woman: { char: '🙎' },
  pouting_man: { char: '🙎‍♂️' },
  frowning_woman: { char: '🙍' },
  frowning_man: { char: '🙍‍♂️' },
  haircut_woman: { char: '💇' },
  haircut_man: { char: '💇‍♂️' },
  massage_woman: { char: '💆' },
  massage_man: { char: '💆‍♂️' },
  couple_with_heart_woman_man: { char: '💑' },
  couple_with_heart_woman_woman: { char: '👩‍❤️‍👩' },
  couple_with_heart_man_man: { char: '👨‍❤️‍👨' },
  couplekiss_man_woman: { char: '💏' },
  couplekiss_woman_woman: { char: '👩‍❤️‍💋‍👩' },
  couplekiss_man_man: { char: '👨‍❤️‍💋‍👨' },
  family_man_woman_boy: { char: '👪' },
  family_man_woman_girl: { char: '👨‍👩‍👧' },
  family_man_woman_girl_boy: { char: '👨‍👩‍👧‍👦' },
  family_man_woman_boy_boy: { char: '👨‍👩‍👦‍👦' },
  family_man_woman_girl_girl: { char: '👨‍👩‍👧‍👧' },
  family_woman_woman_boy: { char: '👩‍👩‍👦' },
  family_woman_woman_girl: { char: '👩‍👩‍👧' },
  family_woman_woman_girl_boy: { char: '👩‍👩‍👧‍👦' },
  family_woman_woman_boy_boy: { char: '👩‍👩‍👦‍👦' },
  family_woman_woman_girl_girl: { char: '👩‍👩‍👧‍👧' },
  family_man_man_boy: { char: '👨‍👨‍👦' },
  family_man_man_girl: { char: '👨‍👨‍👧' },
  family_man_man_girl_boy: { char: '👨‍👨‍👧‍👦' },
  family_man_man_boy_boy: { char: '👨‍👨‍👦‍👦' },
  family_man_man_girl_girl: { char: '👨‍👨‍👧‍👧' },
  family_woman_boy: { char: '👩‍👦' },
  family_woman_girl: { char: '👩‍👧' },
  family_woman_girl_boy: { char: '👩‍👧‍👦' },
  family_woman_boy_boy: { char: '👩‍👦‍👦' },
  family_woman_girl_girl: { char: '👩‍👧‍👧' },
  family_man_boy: { char: '👨‍👦' },
  family_man_girl: { char: '👨‍👧' },
  family_man_girl_boy: { char: '👨‍👧‍👦' },
  family_man_boy_boy: { char: '👨‍👦‍👦' },
  family_man_girl_girl: { char: '👨‍👧‍👧' },
  womans_clothes: { char: '👚' },
  tshirt: { char: '👕' },
  jeans: { char: '👖' },
  necktie: { char: '👔' },
  dress: { char: '👗' },
  bikini: { char: '👙' },
  kimono: { char: '👘' },
  lipstick: { char: '💄' },
  kiss: { char: '💋' },
  footprints: { char: '👣' },
  high_heel: { char: '👠' },
  sandal: { char: '👡' },
  boot: { char: '👢' },
  mans_shoe: { char: '👞' },
  athletic_shoe: { char: '👟' },
  womans_hat: { char: '👒' },
  tophat: { char: '🎩' },
  rescue_worker_helmet: { char: '⛑' },
  mortar_board: { char: '🎓' },
  crown: { char: '👑' },
  school_satchel: { char: '🎒' },
  pouch: { char: '👝' },
  purse: { char: '👛' },
  handbag: { char: '👜' },
  briefcase: { char: '💼' },
  eyeglasses: { char: '👓' },
  dark_sunglasses: { char: '🕶' },
  ring: { char: '💍' },
  closed_umbrella: { char: '🌂' },
  dog: { char: '🐶' },
  cat: { char: '🐱' },
  mouse: { char: '🐭' },
  hamster: { char: '🐹' },
  rabbit: { char: '🐰' },
  fox_face: { char: '🦊' },
  bear: { char: '🐻' },
  panda_face: { char: '🐼' },
  koala: { char: '🐨' },
  tiger: { char: '🐯' },
  lion: { char: '🦁' },
  cow: { char: '🐮' },
  pig: { char: '🐷' },
  pig_nose: { char: '🐽' },
  frog: { char: '🐸' },
  squid: { char: '🦑' },
  octopus: { char: '🐙' },
  shrimp: { char: '🦐' },
  monkey_face: { char: '🐵' },
  gorilla: { char: '🦍' },
  see_no_evil: { char: '🙈' },
  hear_no_evil: { char: '🙉' },
  speak_no_evil: { char: '🙊' },
  monkey: { char: '🐒' },
  chicken: { char: '🐔' },
  penguin: { char: '🐧' },
  bird: { char: '🐦' },
  baby_chick: { char: '🐤' },
  hatching_chick: { char: '🐣' },
  hatched_chick: { char: '🐥' },
  duck: { char: '🦆' },
  eagle: { char: '🦅' },
  owl: { char: '🦉' },
  bat: { char: '🦇' },
  wolf: { char: '🐺' },
  boar: { char: '🐗' },
  horse: { char: '🐴' },
  unicorn: { char: '🦄' },
  honeybee: { char: '🐝' },
  bug: { char: '🐛' },
  butterfly: { char: '🦋' },
  snail: { char: '🐌' },
  beetle: { char: '🐞' },
  ant: { char: '🐜' },
  spider: { char: '🕷' },
  scorpion: { char: '🦂' },
  crab: { char: '🦀' },
  snake: { char: '🐍' },
  lizard: { char: '🦎' },
  turtle: { char: '🐢' },
  tropical_fish: { char: '🐠' },
  fish: { char: '🐟' },
  blowfish: { char: '🐡' },
  dolphin: { char: '🐬' },
  shark: { char: '🦈' },
  whale: { char: '🐳' },
  whale2: { char: '🐋' },
  crocodile: { char: '🐊' },
  leopard: { char: '🐆' },
  tiger2: { char: '🐅' },
  water_buffalo: { char: '🐃' },
  ox: { char: '🐂' },
  cow2: { char: '🐄' },
  deer: { char: '🦌' },
  dromedary_camel: { char: '🐪' },
  camel: { char: '🐫' },
  elephant: { char: '🐘' },
  rhinoceros: { char: '🦏' },
  goat: { char: '🐐' },
  ram: { char: '🐏' },
  sheep: { char: '🐑' },
  racehorse: { char: '🐎' },
  pig2: { char: '🐖' },
  rat: { char: '🐀' },
  mouse2: { char: '🐁' },
  rooster: { char: '🐓' },
  turkey: { char: '🦃' },
  dove: { char: '🕊' },
  dog2: { char: '🐕' },
  poodle: { char: '🐩' },
  cat2: { char: '🐈' },
  rabbit2: { char: '🐇' },
  chipmunk: { char: '🐿' },
  paw_prints: { char: '🐾' },
  dragon: { char: '🐉' },
  dragon_face: { char: '🐲' },
  cactus: { char: '🌵' },
  christmas_tree: { char: '🎄' },
  evergreen_tree: { char: '🌲' },
  deciduous_tree: { char: '🌳' },
  palm_tree: { char: '🌴' },
  seedling: { char: '🌱' },
  herb: { char: '🌿' },
  shamrock: { char: '☘' },
  four_leaf_clover: { char: '🍀' },
  bamboo: { char: '🎍' },
  tanabata_tree: { char: '🎋' },
  leaves: { char: '🍃' },
  fallen_leaf: { char: '🍂' },
  maple_leaf: { char: '🍁' },
  ear_of_rice: { char: '🌾' },
  hibiscus: { char: '🌺' },
  sunflower: { char: '🌻' },
  rose: { char: '🌹' },
  wilted_flower: { char: '🥀' },
  tulip: { char: '🌷' },
  blossom: { char: '🌼' },
  cherry_blossom: { char: '🌸' },
  bouquet: { char: '💐' },
  mushroom: { char: '🍄' },
  chestnut: { char: '🌰' },
  jack_o_lantern: { char: '🎃' },
  shell: { char: '🐚' },
  spider_web: { char: '🕸' },
  earth_americas: { char: '🌎' },
  earth_africa: { char: '🌍' },
  earth_asia: { char: '🌏' },
  full_moon: { char: '🌕' },
  waning_gibbous_moon: { char: '🌖' },
  last_quarter_moon: { char: '🌗' },
  waning_crescent_moon: { char: '🌘' },
  new_moon: { char: '🌑' },
  waxing_crescent_moon: { char: '🌒' },
  first_quarter_moon: { char: '🌓' },
  waxing_gibbous_moon: { char: '🌔' },
  new_moon_with_face: { char: '🌚' },
  full_moon_with_face: { char: '🌝' },
  first_quarter_moon_with_face: { char: '🌛' },
  last_quarter_moon_with_face: { char: '🌜' },
  sun_with_face: { char: '🌞' },
  crescent_moon: { char: '🌙' },
  star: { char: '⭐' },
  star2: { char: '🌟' },
  dizzy: { char: '💫' },
  sparkles: { char: '✨' },
  comet: { char: '☄' },
  sunny: { char: '☀️' },
  sun_behind_small_cloud: { char: '🌤' },
  partly_sunny: { char: '⛅' },
  sun_behind_large_cloud: { char: '🌥' },
  sun_behind_rain_cloud: { char: '🌦' },
  cloud: { char: '☁️' },
  cloud_with_rain: { char: '🌧' },
  cloud_with_lightning_and_rain: { char: '⛈' },
  cloud_with_lightning: { char: '🌩' },
  zap: { char: '⚡' },
  fire: { char: '🔥' },
  boom: { char: '💥' },
  snowflake: { char: '❄️' },
  cloud_with_snow: { char: '🌨' },
  snowman: { char: '⛄' },
  snowman_with_snow: { char: '☃' },
  wind_face: { char: '🌬' },
  dash: { char: '💨' },
  tornado: { char: '🌪' },
  fog: { char: '🌫' },
  open_umbrella: { char: '☂' },
  umbrella: { char: '☔' },
  droplet: { char: '💧' },
  sweat_drops: { char: '💦' },
  ocean: { char: '🌊' },
  green_apple: { char: '🍏' },
  apple: { char: '🍎' },
  pear: { char: '🍐' },
  tangerine: { char: '🍊' },
  lemon: { char: '🍋' },
  banana: { char: '🍌' },
  watermelon: { char: '🍉' },
  grapes: { char: '🍇' },
  strawberry: { char: '🍓' },
  melon: { char: '🍈' },
  cherries: { char: '🍒' },
  peach: { char: '🍑' },
  pineapple: { char: '🍍' },
  kiwi_fruit: { char: '🥝' },
  avocado: { char: '🥑' },
  tomato: { char: '🍅' },
  eggplant: { char: '🍆' },
  cucumber: { char: '🥒' },
  carrot: { char: '🥕' },
  hot_pepper: { char: '🌶' },
  potato: { char: '🥔' },
  corn: { char: '🌽' },
  sweet_potato: { char: '🍠' },
  peanuts: { char: '🥜' },
  honey_pot: { char: '🍯' },
  croissant: { char: '🥐' },
  bread: { char: '🍞' },
  baguette_bread: { char: '🥖' },
  cheese: { char: '🧀' },
  egg: { char: '🥚' },
  bacon: { char: '🥓' },
  pancakes: { char: '🥞' },
  poultry_leg: { char: '🍗' },
  meat_on_bone: { char: '🍖' },
  fried_shrimp: { char: '🍤' },
  fried_egg: { char: '🍳' },
  hamburger: { char: '🍔' },
  fries: { char: '🍟' },
  stuffed_flatbread: { char: '🥙' },
  hotdog: { char: '🌭' },
  pizza: { char: '🍕' },
  spaghetti: { char: '🍝' },
  taco: { char: '🌮' },
  burrito: { char: '🌯' },
  green_salad: { char: '🥗' },
  shallow_pan_of_food: { char: '🥘' },
  ramen: { char: '🍜' },
  stew: { char: '🍲' },
  fish_cake: { char: '🍥' },
  sushi: { char: '🍣' },
  bento: { char: '🍱' },
  curry: { char: '🍛' },
  rice_ball: { char: '🍙' },
  rice: { char: '🍚' },
  rice_cracker: { char: '🍘' },
  oden: { char: '🍢' },
  dango: { char: '🍡' },
  shaved_ice: { char: '🍧' },
  ice_cream: { char: '🍨' },
  icecream: { char: '🍦' },
  cake: { char: '🍰' },
  birthday: { char: '🎂' },
  custard: { char: '🍮' },
  candy: { char: '🍬' },
  lollipop: { char: '🍭' },
  chocolate_bar: { char: '🍫' },
  popcorn: { char: '🍿' },
  doughnut: { char: '🍩' },
  cookie: { char: '🍪' },
  milk_glass: { char: '🥛' },
  beer: { char: '🍺' },
  beers: { char: '🍻' },
  clinking_glasses: { char: '🥂' },
  wine_glass: { char: '🍷' },
  tumbler_glass: { char: '🥃' },
  cocktail: { char: '🍸' },
  tropical_drink: { char: '🍹' },
  champagne: { char: '🍾' },
  sake: { char: '🍶' },
  tea: { char: '🍵' },
  coffee: { char: '☕' },
  baby_bottle: { char: '🍼' },
  spoon: { char: '🥄' },
  fork_and_knife: { char: '🍴' },
  plate_with_cutlery: { char: '🍽' },
  soccer: { char: '⚽' },
  basketball: { char: '🏀' },
  football: { char: '🏈' },
  baseball: { char: '⚾' },
  tennis: { char: '🎾' },
  volleyball: { char: '🏐' },
  rugby_football: { char: '🏉' },
  '8ball': { char: '🎱' },
  golf: { char: '⛳' },
  golfing_woman: { char: '🏌️‍♀️' },
  golfing_man: { char: '🏌' },
  ping_pong: { char: '🏓' },
  badminton: { char: '🏸' },
  goal_net: { char: '🥅' },
  ice_hockey: { char: '🏒' },
  field_hockey: { char: '🏑' },
  cricket: { char: '🏏' },
  ski: { char: '🎿' },
  skier: { char: '⛷' },
  snowboarder: { char: '🏂' },
  person_fencing: { char: '🤺' },
  women_wrestling: { char: '🤼‍♀️' },
  men_wrestling: { char: '🤼‍♂️' },
  woman_cartwheeling: { char: '🤸‍♀️' },
  man_cartwheeling: { char: '🤸‍♂️' },
  woman_playing_handball: { char: '🤾‍♀️' },
  man_playing_handball: { char: '🤾‍♂️' },
  ice_skate: { char: '⛸' },
  bow_and_arrow: { char: '🏹' },
  fishing_pole_and_fish: { char: '🎣' },
  boxing_glove: { char: '🥊' },
  martial_arts_uniform: { char: '🥋' },
  rowing_woman: { char: '🚣‍♀️' },
  rowing_man: { char: '🚣' },
  swimming_woman: { char: '🏊‍♀️' },
  swimming_man: { char: '🏊' },
  woman_playing_water_polo: { char: '🤽‍♀️' },
  man_playing_water_polo: { char: '🤽‍♂️' },
  surfing_woman: { char: '🏄‍♀️' },
  surfing_man: { char: '🏄' },
  bath: { char: '🛀' },
  basketball_woman: { char: '⛹️‍♀️' },
  basketball_man: { char: '⛹' },
  weight_lifting_woman: { char: '🏋️‍♀️' },
  weight_lifting_man: { char: '🏋' },
  biking_woman: { char: '🚴‍♀️' },
  biking_man: { char: '🚴' },
  mountain_biking_woman: { char: '🚵‍♀️' },
  mountain_biking_man: { char: '🚵' },
  horse_racing: { char: '🏇' },
  business_suit_levitating: { char: '🕴' },
  trophy: { char: '🏆' },
  running_shirt_with_sash: { char: '🎽' },
  medal_sports: { char: '🏅' },
  medal_military: { char: '🎖' },
  '1st_place_medal': { char: '🥇' },
  '2nd_place_medal': { char: '🥈' },
  '3rd_place_medal': { char: '🥉' },
  reminder_ribbon: { char: '🎗' },
  rosette: { char: '🏵' },
  ticket: { char: '🎫' },
  tickets: { char: '🎟' },
  performing_arts: { char: '🎭' },
  art: { char: '🎨' },
  circus_tent: { char: '🎪' },
  woman_juggling: { char: '🤹‍♀️' },
  man_juggling: { char: '🤹‍♂️' },
  microphone: { char: '🎤' },
  headphones: { char: '🎧' },
  musical_score: { char: '🎼' },
  musical_keyboard: { char: '🎹' },
  drum: { char: '🥁' },
  saxophone: { char: '🎷' },
  trumpet: { char: '🎺' },
  guitar: { char: '🎸' },
  violin: { char: '🎻' },
  clapper: { char: '🎬' },
  video_game: { char: '🎮' },
  space_invader: { char: '👾' },
  dart: { char: '🎯' },
  game_die: { char: '🎲' },
  slot_machine: { char: '🎰' },
  bowling: { char: '🎳' },
  red_car: { char: '🚗' },
  taxi: { char: '🚕' },
  blue_car: { char: '🚙' },
  bus: { char: '🚌' },
  trolleybus: { char: '🚎' },
  racing_car: { char: '🏎' },
  police_car: { char: '🚓' },
  ambulance: { char: '🚑' },
  fire_engine: { char: '🚒' },
  minibus: { char: '🚐' },
  truck: { char: '🚚' },
  articulated_lorry: { char: '🚛' },
  tractor: { char: '🚜' },
  kick_scooter: { char: '🛴' },
  motorcycle: { char: '🏍' },
  bike: { char: '🚲' },
  motor_scooter: { char: '🛵' },
  rotating_light: { char: '🚨' },
  oncoming_police_car: { char: '🚔' },
  oncoming_bus: { char: '🚍' },
  oncoming_automobile: { char: '🚘' },
  oncoming_taxi: { char: '🚖' },
  aerial_tramway: { char: '🚡' },
  mountain_cableway: { char: '🚠' },
  suspension_railway: { char: '🚟' },
  railway_car: { char: '🚃' },
  train: { char: '🚋' },
  monorail: { char: '🚝' },
  bullettrain_side: { char: '🚄' },
  bullettrain_front: { char: '🚅' },
  light_rail: { char: '🚈' },
  mountain_railway: { char: '🚞' },
  steam_locomotive: { char: '🚂' },
  train2: { char: '🚆' },
  metro: { char: '🚇' },
  tram: { char: '🚊' },
  station: { char: '🚉' },
  helicopter: { char: '🚁' },
  small_airplane: { char: '🛩' },
  airplane: { char: '✈️' },
  flight_departure: { char: '🛫' },
  flight_arrival: { char: '🛬' },
  sailboat: { char: '⛵' },
  motor_boat: { char: '🛥' },
  speedboat: { char: '🚤' },
  ferry: { char: '⛴' },
  passenger_ship: { char: '🛳' },
  rocket: { char: '🚀' },
  artificial_satellite: { char: '🛰' },
  seat: { char: '💺' },
  canoe: { char: '🛶' },
  anchor: { char: '⚓' },
  construction: { char: '🚧' },
  fuelpump: { char: '⛽' },
  busstop: { char: '🚏' },
  vertical_traffic_light: { char: '🚦' },
  traffic_light: { char: '🚥' },
  checkered_flag: { char: '🏁' },
  ship: { char: '🚢' },
  ferris_wheel: { char: '🎡' },
  roller_coaster: { char: '🎢' },
  carousel_horse: { char: '🎠' },
  building_construction: { char: '🏗' },
  foggy: { char: '🌁' },
  tokyo_tower: { char: '🗼' },
  factory: { char: '🏭' },
  fountain: { char: '⛲' },
  rice_scene: { char: '🎑' },
  mountain: { char: '⛰' },
  mountain_snow: { char: '🏔' },
  mount_fuji: { char: '🗻' },
  volcano: { char: '🌋' },
  japan: { char: '🗾' },
  camping: { char: '🏕' },
  tent: { char: '⛺' },
  national_park: { char: '🏞' },
  motorway: { char: '🛣' },
  railway_track: { char: '🛤' },
  sunrise: { char: '🌅' },
  sunrise_over_mountains: { char: '🌄' },
  desert: { char: '🏜' },
  beach_umbrella: { char: '🏖' },
  desert_island: { char: '🏝' },
  city_sunrise: { char: '🌇' },
  city_sunset: { char: '🌆' },
  cityscape: { char: '🏙' },
  night_with_stars: { char: '🌃' },
  bridge_at_night: { char: '🌉' },
  milky_way: { char: '🌌' },
  stars: { char: '🌠' },
  sparkler: { char: '🎇' },
  fireworks: { char: '🎆' },
  rainbow: { char: '🌈' },
  houses: { char: '🏘' },
  european_castle: { char: '🏰' },
  japanese_castle: { char: '🏯' },
  stadium: { char: '🏟' },
  statue_of_liberty: { char: '🗽' },
  house: { char: '🏠' },
  house_with_garden: { char: '🏡' },
  derelict_house: { char: '🏚' },
  office: { char: '🏢' },
  department_store: { char: '🏬' },
  post_office: { char: '🏣' },
  european_post_office: { char: '🏤' },
  hospital: { char: '🏥' },
  bank: { char: '🏦' },
  hotel: { char: '🏨' },
  convenience_store: { char: '🏪' },
  school: { char: '🏫' },
  love_hotel: { char: '🏩' },
  wedding: { char: '💒' },
  classical_building: { char: '🏛' },
  church: { char: '⛪' },
  mosque: { char: '🕌' },
  synagogue: { char: '🕍' },
  kaaba: { char: '🕋' },
  shinto_shrine: { char: '⛩' },
  watch: { char: '⌚' },
  iphone: { char: '📱' },
  calling: { char: '📲' },
  computer: { char: '💻' },
  keyboard: { char: '⌨' },
  desktop_computer: { char: '🖥' },
  printer: { char: '🖨' },
  computer_mouse: { char: '🖱' },
  trackball: { char: '🖲' },
  joystick: { char: '🕹' },
  clamp: { char: '🗜' },
  minidisc: { char: '💽' },
  floppy_disk: { char: '💾' },
  cd: { char: '💿' },
  dvd: { char: '📀' },
  vhs: { char: '📼' },
  camera: { char: '📷' },
  camera_flash: { char: '📸' },
  video_camera: { char: '📹' },
  movie_camera: { char: '🎥' },
  film_projector: { char: '📽' },
  film_strip: { char: '🎞' },
  telephone_receiver: { char: '📞' },
  phone: { char: '☎️' },
  pager: { char: '📟' },
  fax: { char: '📠' },
  tv: { char: '📺' },
  radio: { char: '📻' },
  studio_microphone: { char: '🎙' },
  level_slider: { char: '🎚' },
  control_knobs: { char: '🎛' },
  stopwatch: { char: '⏱' },
  timer_clock: { char: '⏲' },
  alarm_clock: { char: '⏰' },
  mantelpiece_clock: { char: '🕰' },
  hourglass_flowing_sand: { char: '⏳' },
  hourglass: { char: '⌛' },
  satellite: { char: '📡' },
  battery: { char: '🔋' },
  electric_plug: { char: '🔌' },
  bulb: { char: '💡' },
  flashlight: { char: '🔦' },
  candle: { char: '🕯' },
  wastebasket: { char: '🗑' },
  oil_drum: { char: '🛢' },
  money_with_wings: { char: '💸' },
  dollar: { char: '💵' },
  yen: { char: '💴' },
  euro: { char: '💶' },
  pound: { char: '💷' },
  moneybag: { char: '💰' },
  credit_card: { char: '💳' },
  gem: { char: '💎' },
  balance_scale: { char: '⚖' },
  wrench: { char: '🔧' },
  hammer: { char: '🔨' },
  hammer_and_pick: { char: '⚒' },
  hammer_and_wrench: { char: '🛠' },
  pick: { char: '⛏' },
  nut_and_bolt: { char: '🔩' },
  gear: { char: '⚙' },
  chains: { char: '⛓' },
  gun: { char: '🔫' },
  bomb: { char: '💣' },
  hocho: { char: '🔪' },
  dagger: { char: '🗡' },
  crossed_swords: { char: '⚔' },
  shield: { char: '🛡' },
  smoking: { char: '🚬' },
  skull_and_crossbones: { char: '☠' },
  coffin: { char: '⚰' },
  funeral_urn: { char: '⚱' },
  amphora: { char: '🏺' },
  crystal_ball: { char: '🔮' },
  prayer_beads: { char: '📿' },
  barber: { char: '💈' },
  alembic: { char: '⚗' },
  telescope: { char: '🔭' },
  microscope: { char: '🔬' },
  hole: { char: '🕳' },
  pill: { char: '💊' },
  syringe: { char: '💉' },
  thermometer: { char: '🌡' },
  label: { char: '🏷' },
  bookmark: { char: '🔖' },
  toilet: { char: '🚽' },
  shower: { char: '🚿' },
  bathtub: { char: '🛁' },
  key: { char: '🔑' },
  old_key: { char: '🗝' },
  couch_and_lamp: { char: '🛋' },
  sleeping_bed: { char: '🛌' },
  bed: { char: '🛏' },
  door: { char: '🚪' },
  bellhop_bell: { char: '🛎' },
  framed_picture: { char: '🖼' },
  world_map: { char: '🗺' },
  parasol_on_ground: { char: '⛱' },
  moyai: { char: '🗿' },
  shopping: { char: '🛍' },
  shopping_cart: { char: '🛒' },
  balloon: { char: '🎈' },
  flags: { char: '🎏' },
  ribbon: { char: '🎀' },
  gift: { char: '🎁' },
  confetti_ball: { char: '🎊' },
  tada: { char: '🎉' },
  dolls: { char: '🎎' },
  wind_chime: { char: '🎐' },
  crossed_flags: { char: '🎌' },
  izakaya_lantern: { char: '🏮' },
  email: { char: '✉️' },
  envelope_with_arrow: { char: '📩' },
  incoming_envelope: { char: '📨' },
  'e-mail': { char: '📧' },
  love_letter: { char: '💌' },
  postbox: { char: '📮' },
  mailbox_closed: { char: '📪' },
  mailbox: { char: '📫' },
  mailbox_with_mail: { char: '📬' },
  mailbox_with_no_mail: { char: '📭' },
  package: { char: '📦' },
  postal_horn: { char: '📯' },
  inbox_tray: { char: '📥' },
  outbox_tray: { char: '📤' },
  scroll: { char: '📜' },
  page_with_curl: { char: '📃' },
  bookmark_tabs: { char: '📑' },
  bar_chart: { char: '📊' },
  chart_with_upwards_trend: { char: '📈' },
  chart_with_downwards_trend: { char: '📉' },
  page_facing_up: { char: '📄' },
  date: { char: '📅' },
  calendar: { char: '📆' },
  spiral_calendar: { char: '🗓' },
  card_index: { char: '📇' },
  card_file_box: { char: '🗃' },
  ballot_box: { char: '🗳' },
  file_cabinet: { char: '🗄' },
  clipboard: { char: '📋' },
  spiral_notepad: { char: '🗒' },
  file_folder: { char: '📁' },
  open_file_folder: { char: '📂' },
  card_index_dividers: { char: '🗂' },
  newspaper_roll: { char: '🗞' },
  newspaper: { char: '📰' },
  notebook: { char: '📓' },
  closed_book: { char: '📕' },
  green_book: { char: '📗' },
  blue_book: { char: '📘' },
  orange_book: { char: '📙' },
  notebook_with_decorative_cover: { char: '📔' },
  ledger: { char: '📒' },
  books: { char: '📚' },
  open_book: { char: '📖' },
  link: { char: '🔗' },
  paperclip: { char: '📎' },
  paperclips: { char: '🖇' },
  scissors: { char: '✂️' },
  triangular_ruler: { char: '📐' },
  straight_ruler: { char: '📏' },
  pushpin: { char: '📌' },
  round_pushpin: { char: '📍' },
  triangular_flag_on_post: { char: '🚩' },
  white_flag: { char: '🏳' },
  black_flag: { char: '🏴' },
  rainbow_flag: { char: '🏳️‍🌈' },
  closed_lock_with_key: { char: '🔐' },
  lock: { char: '🔒' },
  unlock: { char: '🔓' },
  lock_with_ink_pen: { char: '🔏' },
  pen: { char: '🖊' },
  fountain_pen: { char: '🖋' },
  black_nib: { char: '✒️' },
  memo: { char: '📝' },
  pencil2: { char: '✏️' },
  crayon: { char: '🖍' },
  paintbrush: { char: '🖌' },
  mag: { char: '🔍' },
  mag_right: { char: '🔎' },
  heart: { char: '❤️' },
  yellow_heart: { char: '💛' },
  green_heart: { char: '💚' },
  blue_heart: { char: '💙' },
  purple_heart: { char: '💜' },
  black_heart: { char: '🖤' },
  broken_heart: { char: '💔' },
  heavy_heart_exclamation: { char: '❣' },
  two_hearts: { char: '💕' },
  revolving_hearts: { char: '💞' },
  heartbeat: { char: '💓' },
  heartpulse: { char: '💗' },
  sparkling_heart: { char: '💖' },
  cupid: { char: '💘' },
  gift_heart: { char: '💝' },
  heart_decoration: { char: '💟' },
  peace_symbol: { char: '☮' },
  latin_cross: { char: '✝' },
  star_and_crescent: { char: '☪' },
  om: { char: '🕉' },
  wheel_of_dharma: { char: '☸' },
  star_of_david: { char: '✡' },
  six_pointed_star: { char: '🔯' },
  menorah: { char: '🕎' },
  yin_yang: { char: '☯' },
  orthodox_cross: { char: '☦' },
  place_of_worship: { char: '🛐' },
  ophiuchus: { char: '⛎' },
  aries: { char: '♈' },
  taurus: { char: '♉' },
  gemini: { char: '♊' },
  cancer: { char: '♋' },
  leo: { char: '♌' },
  virgo: { char: '♍' },
  libra: { char: '♎' },
  scorpius: { char: '♏' },
  sagittarius: { char: '♐' },
  capricorn: { char: '♑' },
  aquarius: { char: '♒' },
  pisces: { char: '♓' },
  id: { char: '🆔' },
  atom_symbol: { char: '⚛' },
  u7a7a: { char: '🈳' },
  u5272: { char: '🈹' },
  radioactive: { char: '☢' },
  biohazard: { char: '☣' },
  mobile_phone_off: { char: '📴' },
  vibration_mode: { char: '📳' },
  u6709: { char: '🈶' },
  u7121: { char: '🈚' },
  u7533: { char: '🈸' },
  u55b6: { char: '🈺' },
  u6708: { char: '🈷️' },
  eight_pointed_black_star: { char: '✴️' },
  vs: { char: '🆚' },
  accept: { char: '🉑' },
  white_flower: { char: '💮' },
  ideograph_advantage: { char: '🉐' },
  secret: { char: '㊙️' },
  congratulations: { char: '㊗️' },
  u5408: { char: '🈴' },
  u6e80: { char: '🈵' },
  u7981: { char: '🈲' },
  a: { char: '🅰️' },
  b: { char: '🅱️' },
  ab: { char: '🆎' },
  cl: { char: '🆑' },
  o2: { char: '🅾️' },
  sos: { char: '🆘' },
  no_entry: { char: '⛔' },
  name_badge: { char: '📛' },
  no_entry_sign: { char: '🚫' },
  x: { char: '❌' },
  o: { char: '⭕' },
  stop_sign: { char: '🛑' },
  anger: { char: '💢' },
  hotsprings: { char: '♨️' },
  no_pedestrians: { char: '🚷' },
  do_not_litter: { char: '🚯' },
  no_bicycles: { char: '🚳' },
  'non-potable_water': { char: '🚱' },
  underage: { char: '🔞' },
  no_mobile_phones: { char: '📵' },
  exclamation: { char: '❗' },
  grey_exclamation: { char: '❕' },
  question: { char: '❓' },
  grey_question: { char: '❔' },
  bangbang: { char: '‼️' },
  interrobang: { char: '⁉️' },
  low_brightness: { char: '🔅' },
  high_brightness: { char: '🔆' },
  trident: { char: '🔱' },
  fleur_de_lis: { char: '⚜' },
  part_alternation_mark: { char: '〽️' },
  warning: { char: '⚠️' },
  children_crossing: { char: '🚸' },
  beginner: { char: '🔰' },
  recycle: { char: '♻️' },
  u6307: { char: '🈯' },
  chart: { char: '💹' },
  sparkle: { char: '❇️' },
  eight_spoked_asterisk: { char: '✳️' },
  negative_squared_cross_mark: { char: '❎' },
  white_check_mark: { char: '✅' },
  diamond_shape_with_a_dot_inside: { char: '💠' },
  cyclone: { char: '🌀' },
  loop: { char: '➿' },
  globe_with_meridians: { char: '🌐' },
  m: { char: 'Ⓜ️' },
  atm: { char: '🏧' },
  sa: { char: '🈂️' },
  passport_control: { char: '🛂' },
  customs: { char: '🛃' },
  baggage_claim: { char: '🛄' },
  left_luggage: { char: '🛅' },
  wheelchair: { char: '♿' },
  no_smoking: { char: '🚭' },
  wc: { char: '🚾' },
  parking: { char: '🅿️' },
  potable_water: { char: '🚰' },
  mens: { char: '🚹' },
  womens: { char: '🚺' },
  baby_symbol: { char: '🚼' },
  restroom: { char: '🚻' },
  put_litter_in_its_place: { char: '🚮' },
  cinema: { char: '🎦' },
  signal_strength: { char: '📶' },
  koko: { char: '🈁' },
  ng: { char: '🆖' },
  ok: { char: '🆗' },
  up: { char: '🆙' },
  cool: { char: '🆒' },
  new: { char: '🆕' },
  free: { char: '🆓' },
  zero: { char: '0️⃣' },
  one: { char: '1️⃣' },
  two: { char: '2️⃣' },
  three: { char: '3️⃣' },
  four: { char: '4️⃣' },
  five: { char: '5️⃣' },
  six: { char: '6️⃣' },
  seven: { char: '7️⃣' },
  eight: { char: '8️⃣' },
  nine: { char: '9️⃣' },
  keycap_ten: { char: '🔟' },
  asterisk: { char: '*⃣' },
  arrow_forward: { char: '▶️' },
  pause_button: { char: '⏸' },
  next_track_button: { char: '⏭' },
  stop_button: { char: '⏹' },
  record_button: { char: '⏺' },
  play_or_pause_button: { char: '⏯' },
  previous_track_button: { char: '⏮' },
  fast_forward: { char: '⏩' },
  rewind: { char: '⏪' },
  twisted_rightwards_arrows: { char: '🔀' },
  repeat: { char: '🔁' },
  repeat_one: { char: '🔂' },
  arrow_backward: { char: '◀️' },
  arrow_up_small: { char: '🔼' },
  arrow_down_small: { char: '🔽' },
  arrow_double_up: { char: '⏫' },
  arrow_double_down: { char: '⏬' },
  arrow_right: { char: '➡️' },
  arrow_left: { char: '⬅️' },
  arrow_up: { char: '⬆️' },
  arrow_down: { char: '⬇️' },
  arrow_upper_right: { char: '↗️' },
  arrow_lower_right: { char: '↘️' },
  arrow_lower_left: { char: '↙️' },
  arrow_upper_left: { char: '↖️' },
  arrow_up_down: { char: '↕️' },
  left_right_arrow: { char: '↔️' },
  arrows_counterclockwise: { char: '🔄' },
  arrow_right_hook: { char: '↪️' },
  leftwards_arrow_with_hook: { char: '↩️' },
  arrow_heading_up: { char: '⤴️' },
  arrow_heading_down: { char: '⤵️' },
  hash: { char: '#️⃣' },
  information_source: { char: 'ℹ️' },
  abc: { char: '🔤' },
  abcd: { char: '🔡' },
  capital_abcd: { char: '🔠' },
  symbols: { char: '🔣' },
  musical_note: { char: '🎵' },
  notes: { char: '🎶' },
  wavy_dash: { char: '〰️' },
  curly_loop: { char: '➰' },
  heavy_check_mark: { char: '✔️' },
  arrows_clockwise: { char: '🔃' },
  heavy_plus_sign: { char: '➕' },
  heavy_minus_sign: { char: '➖' },
  heavy_division_sign: { char: '➗' },
  heavy_multiplication_x: { char: '✖️' },
  heavy_dollar_sign: { char: '💲' },
  currency_exchange: { char: '💱' },
  copyright: { char: '©️' },
  registered: { char: '®️' },
  tm: { char: '™️' },
  end: { char: '🔚' },
  back: { char: '🔙' },
  on: { char: '🔛' },
  top: { char: '🔝' },
  soon: { char: '🔜' },
  ballot_box_with_check: { char: '☑️' },
  radio_button: { char: '🔘' },
  white_circle: { char: '⚪' },
  black_circle: { char: '⚫' },
  red_circle: { char: '🔴' },
  large_blue_circle: { char: '🔵' },
  small_orange_diamond: { char: '🔸' },
  small_blue_diamond: { char: '🔹' },
  large_orange_diamond: { char: '🔶' },
  large_blue_diamond: { char: '🔷' },
  small_red_triangle: { char: '🔺' },
  black_small_square: { char: '▪️' },
  white_small_square: { char: '▫️' },
  black_large_square: { char: '⬛' },
  white_large_square: { char: '⬜' },
  small_red_triangle_down: { char: '🔻' },
  black_medium_square: { char: '◼️' },
  white_medium_square: { char: '◻️' },
  black_medium_small_square: { char: '◾' },
  white_medium_small_square: { char: '◽' },
  black_square_button: { char: '🔲' },
  white_square_button: { char: '🔳' },
  speaker: { char: '🔈' },
  sound: { char: '🔉' },
  loud_sound: { char: '🔊' },
  mute: { char: '🔇' },
  mega: { char: '📣' },
  loudspeaker: { char: '📢' },
  bell: { char: '🔔' },
  no_bell: { char: '🔕' },
  black_joker: { char: '🃏' },
  mahjong: { char: '🀄' },
  spades: { char: '♠️' },
  clubs: { char: '♣️' },
  hearts: { char: '♥️' },
  diamonds: { char: '♦️' },
  flower_playing_cards: { char: '🎴' },
  thought_balloon: { char: '💭' },
  right_anger_bubble: { char: '🗯' },
  speech_balloon: { char: '💬' },
  left_speech_bubble: { char: '🗨' },
  clock1: { char: '🕐' },
  clock2: { char: '🕑' },
  clock3: { char: '🕒' },
  clock4: { char: '🕓' },
  clock5: { char: '🕔' },
  clock6: { char: '🕕' },
  clock7: { char: '🕖' },
  clock8: { char: '🕗' },
  clock9: { char: '🕘' },
  clock10: { char: '🕙' },
  clock11: { char: '🕚' },
  clock12: { char: '🕛' },
  clock130: { char: '🕜' },
  clock230: { char: '🕝' },
  clock330: { char: '🕞' },
  clock430: { char: '🕟' },
  clock530: { char: '🕠' },
  clock630: { char: '🕡' },
  clock730: { char: '🕢' },
  clock830: { char: '🕣' },
  clock930: { char: '🕤' },
  clock1030: { char: '🕥' },
  clock1130: { char: '🕦' },
  clock1230: { char: '🕧' },
  afghanistan: { char: '🇦🇫' },
  aland_islands: { char: '🇦🇽' },
  albania: { char: '🇦🇱' },
  algeria: { char: '🇩🇿' },
  american_samoa: { char: '🇦🇸' },
  andorra: { char: '🇦🇩' },
  angola: { char: '🇦🇴' },
  anguilla: { char: '🇦🇮' },
  antarctica: { char: '🇦🇶' },
  antigua_barbuda: { char: '🇦🇬' },
  argentina: { char: '🇦🇷' },
  armenia: { char: '🇦🇲' },
  aruba: { char: '🇦🇼' },
  australia: { char: '🇦🇺' },
  austria: { char: '🇦🇹' },
  azerbaijan: { char: '🇦🇿' },
  bahamas: { char: '🇧🇸' },
  bahrain: { char: '🇧🇭' },
  bangladesh: { char: '🇧🇩' },
  barbados: { char: '🇧🇧' },
  belarus: { char: '🇧🇾' },
  belgium: { char: '🇧🇪' },
  belize: { char: '🇧🇿' },
  benin: { char: '🇧🇯' },
  bermuda: { char: '🇧🇲' },
  bhutan: { char: '🇧🇹' },
  bolivia: { char: '🇧🇴' },
  caribbean_netherlands: { char: '🇧🇶' },
  bosnia_herzegovina: { char: '🇧🇦' },
  botswana: { char: '🇧🇼' },
  brazil: { char: '🇧🇷' },
  british_indian_ocean_territory: { char: '🇮🇴' },
  british_virgin_islands: { char: '🇻🇬' },
  brunei: { char: '🇧🇳' },
  bulgaria: { char: '🇧🇬' },
  burkina_faso: { char: '🇧🇫' },
  burundi: { char: '🇧🇮' },
  cape_verde: { char: '🇨🇻' },
  cambodia: { char: '🇰🇭' },
  cameroon: { char: '🇨🇲' },
  canada: { char: '🇨🇦' },
  canary_islands: { char: '🇮🇨' },
  cayman_islands: { char: '🇰🇾' },
  central_african_republic: { char: '🇨🇫' },
  chad: { char: '🇹🇩' },
  chile: { char: '🇨🇱' },
  cn: { char: '🇨🇳' },
  christmas_island: { char: '🇨🇽' },
  cocos_islands: { char: '🇨🇨' },
  colombia: { char: '🇨🇴' },
  comoros: { char: '🇰🇲' },
  congo_brazzaville: { char: '🇨🇬' },
  congo_kinshasa: { char: '🇨🇩' },
  cook_islands: { char: '🇨🇰' },
  costa_rica: { char: '🇨🇷' },
  croatia: { char: '🇭🇷' },
  cuba: { char: '🇨🇺' },
  curacao: { char: '🇨🇼' },
  cyprus: { char: '🇨🇾' },
  czech_republic: { char: '🇨🇿' },
  denmark: { char: '🇩🇰' },
  djibouti: { char: '🇩🇯' },
  dominica: { char: '🇩🇲' },
  dominican_republic: { char: '🇩🇴' },
  ecuador: { char: '🇪🇨' },
  egypt: { char: '🇪🇬' },
  el_salvador: { char: '🇸🇻' },
  equatorial_guinea: { char: '🇬🇶' },
  eritrea: { char: '🇪🇷' },
  estonia: { char: '🇪🇪' },
  ethiopia: { char: '🇪🇹' },
  eu: { char: '🇪🇺' },
  falkland_islands: { char: '🇫🇰' },
  faroe_islands: { char: '🇫🇴' },
  fiji: { char: '🇫🇯' },
  finland: { char: '🇫🇮' },
  fr: { char: '🇫🇷' },
  french_guiana: { char: '🇬🇫' },
  french_polynesia: { char: '🇵🇫' },
  french_southern_territories: { char: '🇹🇫' },
  gabon: { char: '🇬🇦' },
  gambia: { char: '🇬🇲' },
  georgia: { char: '🇬🇪' },
  de: { char: '🇩🇪' },
  ghana: { char: '🇬🇭' },
  gibraltar: { char: '🇬🇮' },
  greece: { char: '🇬🇷' },
  greenland: { char: '🇬🇱' },
  grenada: { char: '🇬🇩' },
  guadeloupe: { char: '🇬🇵' },
  guam: { char: '🇬🇺' },
  guatemala: { char: '🇬🇹' },
  guernsey: { char: '🇬🇬' },
  guinea: { char: '🇬🇳' },
  guinea_bissau: { char: '🇬🇼' },
  guyana: { char: '🇬🇾' },
  haiti: { char: '🇭🇹' },
  honduras: { char: '🇭🇳' },
  hong_kong: { char: '🇭🇰' },
  hungary: { char: '🇭🇺' },
  iceland: { char: '🇮🇸' },
  india: { char: '🇮🇳' },
  indonesia: { char: '🇮🇩' },
  iran: { char: '🇮🇷' },
  iraq: { char: '🇮🇶' },
  ireland: { char: '🇮🇪' },
  isle_of_man: { char: '🇮🇲' },
  israel: { char: '🇮🇱' },
  it: { char: '🇮🇹' },
  cote_divoire: { char: '🇨🇮' },
  jamaica: { char: '🇯🇲' },
  jp: { char: '🇯🇵' },
  jersey: { char: '🇯🇪' },
  jordan: { char: '🇯🇴' },
  kazakhstan: { char: '🇰🇿' },
  kenya: { char: '🇰🇪' },
  kiribati: { char: '🇰🇮' },
  kosovo: { char: '🇽🇰' },
  kuwait: { char: '🇰🇼' },
  kyrgyzstan: { char: '🇰🇬' },
  laos: { char: '🇱🇦' },
  latvia: { char: '🇱🇻' },
  lebanon: { char: '🇱🇧' },
  lesotho: { char: '🇱🇸' },
  liberia: { char: '🇱🇷' },
  libya: { char: '🇱🇾' },
  liechtenstein: { char: '🇱🇮' },
  lithuania: { char: '🇱🇹' },
  luxembourg: { char: '🇱🇺' },
  macau: { char: '🇲🇴' },
  macedonia: { char: '🇲🇰' },
  madagascar: { char: '🇲🇬' },
  malawi: { char: '🇲🇼' },
  malaysia: { char: '🇲🇾' },
  maldives: { char: '🇲🇻' },
  mali: { char: '🇲🇱' },
  malta: { char: '🇲🇹' },
  marshall_islands: { char: '🇲🇭' },
  martinique: { char: '🇲🇶' },
  mauritania: { char: '🇲🇷' },
  mauritius: { char: '🇲🇺' },
  mayotte: { char: '🇾🇹' },
  mexico: { char: '🇲🇽' },
  micronesia: { char: '🇫🇲' },
  moldova: { char: '🇲🇩' },
  monaco: { char: '🇲🇨' },
  mongolia: { char: '🇲🇳' },
  montenegro: { char: '🇲🇪' },
  montserrat: { char: '🇲🇸' },
  morocco: { char: '🇲🇦' },
  mozambique: { char: '🇲🇿' },
  myanmar: { char: '🇲🇲' },
  namibia: { char: '🇳🇦' },
  nauru: { char: '🇳🇷' },
  nepal: { char: '🇳🇵' },
  netherlands: { char: '🇳🇱' },
  new_caledonia: { char: '🇳🇨' },
  new_zealand: { char: '🇳🇿' },
  nicaragua: { char: '🇳🇮' },
  niger: { char: '🇳🇪' },
  nigeria: { char: '🇳🇬' },
  niue: { char: '🇳🇺' },
  norfolk_island: { char: '🇳🇫' },
  northern_mariana_islands: { char: '🇲🇵' },
  north_korea: { char: '🇰🇵' },
  norway: { char: '🇳🇴' },
  oman: { char: '🇴🇲' },
  pakistan: { char: '🇵🇰' },
  palau: { char: '🇵🇼' },
  palestinian_territories: { char: '🇵🇸' },
  panama: { char: '🇵🇦' },
  papua_new_guinea: { char: '🇵🇬' },
  paraguay: { char: '🇵🇾' },
  peru: { char: '🇵🇪' },
  philippines: { char: '🇵🇭' },
  pitcairn_islands: { char: '🇵🇳' },
  poland: { char: '🇵🇱' },
  portugal: { char: '🇵🇹' },
  puerto_rico: { char: '🇵🇷' },
  qatar: { char: '🇶🇦' },
  reunion: { char: '🇷🇪' },
  romania: { char: '🇷🇴' },
  ru: { char: '🇷🇺' },
  rwanda: { char: '🇷🇼' },
  st_barthelemy: { char: '🇧🇱' },
  st_helena: { char: '🇸🇭' },
  st_kitts_nevis: { char: '🇰🇳' },
  st_lucia: { char: '🇱🇨' },
  st_pierre_miquelon: { char: '🇵🇲' },
  st_vincent_grenadines: { char: '🇻🇨' },
  samoa: { char: '🇼🇸' },
  san_marino: { char: '🇸🇲' },
  sao_tome_principe: { char: '🇸🇹' },
  saudi_arabia: { char: '🇸🇦' },
  senegal: { char: '🇸🇳' },
  serbia: { char: '🇷🇸' },
  seychelles: { char: '🇸🇨' },
  sierra_leone: { char: '🇸🇱' },
  singapore: { char: '🇸🇬' },
  sint_maarten: { char: '🇸🇽' },
  slovakia: { char: '🇸🇰' },
  slovenia: { char: '🇸🇮' },
  solomon_islands: { char: '🇸🇧' },
  somalia: { char: '🇸🇴' },
  south_africa: { char: '🇿🇦' },
  south_georgia_south_sandwich_islands: { char: '🇬🇸' },
  kr: { char: '🇰🇷' },
  south_sudan: { char: '🇸🇸' },
  es: { char: '🇪🇸' },
  sri_lanka: { char: '🇱🇰' },
  sudan: { char: '🇸🇩' },
  suriname: { char: '🇸🇷' },
  swaziland: { char: '🇸🇿' },
  sweden: { char: '🇸🇪' },
  switzerland: { char: '🇨🇭' },
  syria: { char: '🇸🇾' },
  taiwan: { char: '🇹🇼' },
  tajikistan: { char: '🇹🇯' },
  tanzania: { char: '🇹🇿' },
  thailand: { char: '🇹🇭' },
  timor_leste: { char: '🇹🇱' },
  togo: { char: '🇹🇬' },
  tokelau: { char: '🇹🇰' },
  tonga: { char: '🇹🇴' },
  trinidad_tobago: { char: '🇹🇹' },
  tunisia: { char: '🇹🇳' },
  tr: { char: '🇹🇷' },
  turkmenistan: { char: '🇹🇲' },
  turks_caicos_islands: { char: '🇹🇨' },
  tuvalu: { char: '🇹🇻' },
  uganda: { char: '🇺🇬' },
  ukraine: { char: '🇺🇦' },
  united_arab_emirates: { char: '🇦🇪' },
  uk: { char: '🇬🇧' },
  us: { char: '🇺🇸' },
  us_virgin_islands: { char: '🇻🇮' },
  uruguay: { char: '🇺🇾' },
  uzbekistan: { char: '🇺🇿' },
  vanuatu: { char: '🇻🇺' },
  vatican_city: { char: '🇻🇦' },
  venezuela: { char: '🇻🇪' },
  vietnam: { char: '🇻🇳' },
  wallis_futuna: { char: '🇼🇫' },
  western_sahara: { char: '🇪🇭' },
  yemen: { char: '🇾🇪' },
  zambia: { char: '🇿🇲' },
  zimbabwe: { char: '🇿🇼' },
  octocat: { char: null },
  shipit: { char: null },
  bowtie: { char: null },
  neckbeard: { char: null },
  trollface: { char: null },
  godmode: { char: null },
  goberserk: { char: null },
  finnadie: { char: null },
  feelsgood: { char: null },
  rage1: { char: null },
  rage2: { char: null },
  rage3: { char: null },
  rage4: { char: null },
  suspect: { char: null },
  hurtrealbad: { char: null } };

var getUnicode = (function (name) {
  return (lib[name] || {}).char || '';
});

var EXT = '.png';
var AREA_HEIGHT = 186;
var AREA_WIDTH = 380;
var Path = '../images/';

var toArray$$1 = function toArray$$1(arrayLike) {
  return [].slice.call(arrayLike);
};

var getEleIndex = function getEleIndex(ele) {
  if (!ele) return -1;
  if (!ele.parentElement) return -1;
  return toArray$$1(ele.parentElement.children).indexOf(ele);
};
var index = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "rui-emoji" }, [_c('ul', { directives: [{ name: "clickoutside", rawName: "v-clickoutside", value: _vm.hide, expression: "hide" }], ref: "controller", staticClass: "emoji-controller", on: { "click": _vm.changeActive } }, _vm._l(_vm.pannels, function (pannel, index) {
      return _c('li', [_vm._v(_vm._s(_vm.titles[index]))]);
    })), _c('ul', { ref: "view", staticClass: "emoji-container", on: { "click": _vm.selectItem } }, _vm._l(_vm.emojis, function (emojiGroup) {
      return _c('li', _vm._l(emojiGroup, function (emoji) {
        return _c('a', { attrs: { "href": "javascript:;" } }, [_c('span', { staticClass: "emoji-item", class: "sprite-" + _vm.getPureName(emoji), attrs: { "title": emoji } })]);
      }));
    }))]);
  }, staticRenderFns: [],
  name: 'rui-emoji',
  data: function data() {
    return {
      emojiData: _data,
      pannels: ['表情', '自然', '物品', '地点', '符号'],
      activeIndex: 0,
      selection: null
    };
  },

  props: {
    captions: Array,
    unicode: {
      default: false
    }
  },
  directives: {
    clickoutside: clickoutside
  },
  mounted: function mounted() {
    var _this = this;

    this.$controllers = toArray$$1(this.$refs.controller.querySelectorAll('li'));
    this.$views = toArray$$1(this.$refs.view.querySelectorAll('li'));
    this.$nextTick(function () {
      _this.selectByIndex(0);
    });
    this.useUnicode = this.unicode;
    this.$nextTick(function () {
      _this.handleUnicode();
    });
  },
  destroyed: function destroyed() {
    this.$btn.removeEventListener('mousedown', this.saveSelection, false);
  },

  methods: {
    appendTo: function appendTo() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          area = _ref.area,
          btn = _ref.btn,
          position = _ref.position;

      this.$area = area;
      this.$btn = btn;
      this.__position = position || 'top center';
      this.saveSelection = this.saveSelection.bind(this);
      this.$btn.addEventListener('mousedown', this.saveSelection, false);
      this.calcPosition(position);
      return this;
    },
    setPath: function setPath(path) {
      if (path) {
        Path = path;
      }
      return this;
    },
    handleUnicode: function handleUnicode() {
      var _this2 = this;

      if (!this.useUnicode) return;
      var view = this.$refs.view;
      var data = this.emojiData;
      Object.keys(data).forEach(function (panel) {
        var panelEmoji = data[panel];
        Object.keys(panelEmoji).forEach(function (item) {
          if (!getUnicode(_this2.getPureName(item))) {
            var ele = view.querySelector('[title="' + item + '"]');
            if (ele) {
              var par = ele.parentElement;
              par.parentElement.removeChild(par);
            }
          }
        });
      });
    },
    calcPosition: function calcPosition() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.__position;

      var _position$split = position.split(' '),
          _position$split2 = slicedToArray(_position$split, 2),
          vertical = _position$split2[0],
          horizontal = _position$split2[1];

      this.setVertical(vertical);
      this.setHorizontal(horizontal);
    },
    setVertical: function setVertical(vertical) {
      var btnTop = this.$btn.offsetTop,
          btnHeight = this.$btn.offsetHeight;
      if (vertical === 'top') {
        this.$el.style.top = btnTop - AREA_HEIGHT + 'px';
      } else {
        this.$el.style.top = btnTop + btnHeight + 10 + 'px';
      }
    },
    setHorizontal: function setHorizontal(horizontal) {
      var btnLeft = this.$btn.offsetLeft,
          btnWidth = this.$btn.offsetWidth;
      var left = void 0;
      switch (horizontal) {
        case 'left':
          left = btnLeft;
          break;
        case 'right':
          left = btnLeft + btnWidth;
          break;
        default:
          left = btnLeft - AREA_WIDTH / 2;
      }
      this.$el.style.left = left + 'px';
    },
    hasFocus: function hasFocus() {
      return document.activeElement === this.$area;
    },
    saveSelection: function saveSelection() {
      if (this.hasFocus()) {
        this.selection = RangeUtil.saveSelection();
      }
    },
    insertEmoji: function insertEmoji(img) {
      var _this3 = this;

      this.$area.focus();
      if (this.selection) {
        RangeUtil.restoreSelection(this.selection);
      }
      this.$nextTick(function () {
        try {
          RangeUtil.replaceSelection(img);
          _this3.$area.focus();
        } catch (e) {}
      });
    },
    changeActive: function changeActive(e) {
      var tar = e.target;
      if (tar.tagName.toLowerCase() === 'ul') return;
      var index = getEleIndex(tar);
      if (index === this.activeIndex) return;
      this.activeIndex = index;
    },
    getPureName: function getPureName(name) {
      return name.replace(/:/g, '');
    },
    getFullName: function getFullName(name) {
      return name + EXT;
    },
    getPath: function getPath(emojiName) {
      return Path + this.getFullName(emojiName);
    },
    addClass: function addClass(list, index) {
      list.forEach(function (item) {
        item.classList.remove('active');
      });
      list[index].classList.add('active');
    },
    selectByIndex: function selectByIndex(index) {
      this.addClass(this.$controllers, index);
      this.addClass(this.$views, index);
    },
    getEmojiName: function getEmojiName(target) {
      var tag = this.getNormalTag(target);
      if (tag === 'ul' || tag === 'li') return '';
      var emojiTarget = void 0;
      if (tag === 'a') {
        emojiTarget = target.querySelector('span');
      } else {
        emojiTarget = target;
      }
      return this.getPureName(emojiTarget.title);
    },
    getNormalTag: function getNormalTag(tar) {
      return tar.tagName.toLowerCase();
    },
    selectItem: function selectItem(e) {
      var tar = e.target;
      var tag = this.getNormalTag(tar);
      if (tag === 'ul') return;
      if (tag === 'li') return;
      var emojiName = this.getEmojiName(tar);
      var filePath = this.getPath(emojiName);
      var img = this.getEmoji(filePath, emojiName);
      this.$emit('select', img);
      this.insertEmoji(img);
    },
    getEmoji: function getEmoji(src, emojiName) {
      return this.useUnicode ? this.getUnicodeEmoji(src, emojiName) : this.getImgEmoji(src, emojiName);
    },
    getImgEmoji: function getImgEmoji(src, emojiName) {
      var img = new Image();
      img.src = src;
      img.alt = emojiName;
      img.title = emojiName;
      img.className = 'rui-emoji-img';
      img.width = 20;
      img.height = 20;
      return img;
    },
    getUnicodeEmoji: function getUnicodeEmoji(src, emojiName) {
      var emoji = getUnicode(emojiName);
      var text = document.createTextNode(emoji);
      return text;
    },
    hide: function hide(e) {
      if (e.target === this.$btn) return;
      this.$emit('hide', e);
    }
  },
  computed: {
    emojis: function emojis() {
      var _this4 = this;

      return this.pannels.map(function (item) {
        return Object.keys(_this4.emojiData[item]);
      });
    },
    titles: function titles() {
      return this.captions || this.pannels;
    }
  },
  watch: {
    activeIndex: function activeIndex(index) {
      this.selectByIndex(index);
    }
  }
};

return index;

})));
//# sourceMappingURL=vue-emoji.js.map
