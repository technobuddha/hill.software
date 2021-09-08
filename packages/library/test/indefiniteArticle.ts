import expect from '@util/expect';
import indefiniteArticle from '../src/indefiniteArticle';

describe(
    'indefiniteArticle',
    () => {
        test(
            'should add select the proper indefinite article',
            () => {
                expect(indefiniteArticle('boy')).toBe('a boy');
                expect(indefiniteArticle('apple')).toBe('an apple');
                expect(indefiniteArticle('helicopter')).toBe('a helicopter');
                expect(indefiniteArticle('elephant')).toBe('an elephant');
                expect(indefiniteArticle('big elephant')).toBe('a big elephant');
                expect(indefiniteArticle('itchy sweater')).toBe('an itchy sweater');
                expect(indefiniteArticle('ugly duck')).toBe('an ugly duck');
                expect(indefiniteArticle('european')).toBe('a european');
                expect(indefiniteArticle('university')).toBe('a university');
                expect(indefiniteArticle('unit')).toBe('a unit');
                expect(indefiniteArticle('hour')).toBe('an hour');
                expect(indefiniteArticle('honor')).toBe('an honor');
                expect(indefiniteArticle('Ath')).toBe('an Ath');
                expect(indefiniteArticle('Bth')).toBe('a Bth');
                expect(indefiniteArticle('Cth')).toBe('a Cth');
                expect(indefiniteArticle('Dth')).toBe('a Dth');
                expect(indefiniteArticle('Eth')).toBe('an Eth');
                expect(indefiniteArticle('Fth')).toBe('an Fth');
                expect(indefiniteArticle('Gth')).toBe('a Gth');
                expect(indefiniteArticle('Hth')).toBe('an Hth');
                expect(indefiniteArticle('Ith')).toBe('an Ith');
                expect(indefiniteArticle('Jth')).toBe('a Jth');
                expect(indefiniteArticle('Kth')).toBe('a Kth');
                expect(indefiniteArticle('Lth')).toBe('an Lth');
                expect(indefiniteArticle('Mth')).toBe('an Mth');
                expect(indefiniteArticle('Nth')).toBe('an Nth');
                expect(indefiniteArticle('Oth')).toBe('an Oth');
                expect(indefiniteArticle('Pth')).toBe('a Pth');
                expect(indefiniteArticle('Qth')).toBe('a Qth');
                expect(indefiniteArticle('Rth')).toBe('an Rth');
                expect(indefiniteArticle('Sth')).toBe('an Sth');
                expect(indefiniteArticle('Tth')).toBe('a Tth');
                expect(indefiniteArticle('Uth')).toBe('a Uth');
                expect(indefiniteArticle('Vth')).toBe('a Vth');
                expect(indefiniteArticle('Wth')).toBe('a Wth');
                expect(indefiniteArticle('Xth')).toBe('an Xth');
                expect(indefiniteArticle('Yth')).toBe('a Yth');
                expect(indefiniteArticle('Zth')).toBe('a Zth');
                expect(indefiniteArticle('a-th')).toBe('an a-th');
                expect(indefiniteArticle('b-th')).toBe('a b-th');
                expect(indefiniteArticle('c-th')).toBe('a c-th');
                expect(indefiniteArticle('d-th')).toBe('a d-th');
                expect(indefiniteArticle('e-th')).toBe('an e-th');
                expect(indefiniteArticle('f-th')).toBe('an f-th');
                expect(indefiniteArticle('g-th')).toBe('a g-th');
                expect(indefiniteArticle('h-th')).toBe('an h-th');
                expect(indefiniteArticle('i-th')).toBe('an i-th');
                expect(indefiniteArticle('j-th')).toBe('a j-th');
                expect(indefiniteArticle('k-th')).toBe('a k-th');
                expect(indefiniteArticle('l-th')).toBe('an l-th');
                expect(indefiniteArticle('m-th')).toBe('an m-th');
                expect(indefiniteArticle('n-th')).toBe('an n-th');
                expect(indefiniteArticle('o-th')).toBe('an o-th');
                expect(indefiniteArticle('p-th')).toBe('a p-th');
                expect(indefiniteArticle('q-th')).toBe('a q-th');
                expect(indefiniteArticle('r-th')).toBe('an r-th');
                expect(indefiniteArticle('s-th')).toBe('an s-th');
                expect(indefiniteArticle('t-th')).toBe('a t-th');
                expect(indefiniteArticle('u-th')).toBe('a u-th');
                expect(indefiniteArticle('v-th')).toBe('a v-th');
                expect(indefiniteArticle('w-th')).toBe('a w-th');
                expect(indefiniteArticle('x-th')).toBe('an x-th');
                expect(indefiniteArticle('y-th')).toBe('a y-th');
                expect(indefiniteArticle('z-th')).toBe('a z-th');
                expect(indefiniteArticle('A.B.C')).toBe('an A.B.C');
                expect(indefiniteArticle('AI')).toBe('an AI');
                expect(indefiniteArticle('AGE')).toBe('an AGE');
                expect(indefiniteArticle('agendum')).toBe('an agendum');
                expect(indefiniteArticle('aide-de-camp')).toBe('an aide-de-camp');
                expect(indefiniteArticle('albino')).toBe('an albino');
                expect(indefiniteArticle('B.L.T. sandwich')).toBe('a B.L.T. sandwich');
                expect(indefiniteArticle('BMW')).toBe('a BMW');
                expect(indefiniteArticle('BLANK')).toBe('a BLANK');
                expect(indefiniteArticle('bacterium')).toBe('a bacterium');
                expect(indefiniteArticle('Burmese restaurant')).toBe('a Burmese restaurant');
                expect(indefiniteArticle('C.O.')).toBe('a C.O.');
                expect(indefiniteArticle('CCD')).toBe('a CCD');
                expect(indefiniteArticle('COLON')).toBe('a COLON');
                expect(indefiniteArticle('cameo')).toBe('a cameo');
                expect(indefiniteArticle('CAPITAL')).toBe('a CAPITAL');
                expect(indefiniteArticle('D.S.M.')).toBe('a D.S.M.');
                expect(indefiniteArticle('DNR')).toBe('a DNR');
                expect(indefiniteArticle('DINNER')).toBe('a DINNER');
                expect(indefiniteArticle('dynamo')).toBe('a dynamo');
                expect(indefiniteArticle('E.K.G.')).toBe('an E.K.G.');
                expect(indefiniteArticle('ECG')).toBe('an ECG');
                expect(indefiniteArticle('EGG')).toBe('an EGG');
                expect(indefiniteArticle('embryo')).toBe('an embryo');
                expect(indefiniteArticle('erratum')).toBe('an erratum');
                expect(indefiniteArticle('eucalyptus')).toBe('a eucalyptus');
                expect(indefiniteArticle('Euler number')).toBe('an Euler number');
                expect(indefiniteArticle('eulogy')).toBe('a eulogy');
                expect(indefiniteArticle('euphemism')).toBe('a euphemism');
                expect(indefiniteArticle('euphoria')).toBe('a euphoria');
                expect(indefiniteArticle('ewe')).toBe('a ewe');
                expect(indefiniteArticle('ewer')).toBe('a ewer');
                expect(indefiniteArticle('extremum')).toBe('an extremum');
                expect(indefiniteArticle('eye')).toBe('an eye');
                expect(indefiniteArticle('F.B.I. agent')).toBe('an F.B.I. agent');
                expect(indefiniteArticle('FSM')).toBe('an FSM');
                expect(indefiniteArticle('FACT')).toBe('a FACT');
                expect(indefiniteArticle('FAQ')).toBe('a FAQ');
                expect(indefiniteArticle('F.A.Q.')).toBe('an F.A.Q.');
                expect(indefiniteArticle('fish')).toBe('a fish');
                expect(indefiniteArticle('G-string')).toBe('a G-string');
                expect(indefiniteArticle('GSM phone')).toBe('a GSM phone');
                expect(indefiniteArticle('GOD')).toBe('a GOD');
                expect(indefiniteArticle('genus')).toBe('a genus');
                expect(indefiniteArticle('Governor General')).toBe('a Governor General');
                expect(indefiniteArticle('H-Bomb')).toBe('an H-Bomb');
                expect(indefiniteArticle('H.M.S Ark Royal')).toBe('an H.M.S Ark Royal');
                expect(indefiniteArticle('HSL colour space')).toBe('an HSL colour space');
                expect(indefiniteArticle('HAL 9000')).toBe('a HAL 9000');
                expect(indefiniteArticle('H.A.L. 9000')).toBe('an H.A.L. 9000');
                expect(indefiniteArticle('has-been')).toBe('a has-been');
                expect(indefiniteArticle('height')).toBe('a height');
                expect(indefiniteArticle('heir')).toBe('an heir');
                expect(indefiniteArticle('honed blade')).toBe('a honed blade');
                expect(indefiniteArticle('honest man')).toBe('an honest man');
                expect(indefiniteArticle('honeymoon')).toBe('a honeymoon');
                expect(indefiniteArticle('honorarium')).toBe('an honorarium');
                expect(indefiniteArticle('honorary degree')).toBe('an honorary degree');
                expect(indefiniteArticle('honoree')).toBe('an honoree');
                expect(indefiniteArticle('honorific')).toBe('an honorific');
                expect(indefiniteArticle('Hough transform')).toBe('a Hough transform');
                expect(indefiniteArticle('hound')).toBe('a hound');
                expect(indefiniteArticle('hour')).toBe('an hour');
                expect(indefiniteArticle('hourglass')).toBe('an hourglass');
                expect(indefiniteArticle('houri')).toBe('a houri');
                expect(indefiniteArticle('house')).toBe('a house');
                expect(indefiniteArticle('I.O.U.')).toBe('an I.O.U.');
                expect(indefiniteArticle('IQ')).toBe('an IQ');
                expect(indefiniteArticle('IDEA')).toBe('an IDEA');
                expect(indefiniteArticle('inferno')).toBe('an inferno');
                expect(indefiniteArticle('Inspector General')).toBe('an Inspector General');
                expect(indefiniteArticle('jumbo')).toBe('a jumbo');
                expect(indefiniteArticle('knife')).toBe('a knife');
                expect(indefiniteArticle('L.E.D.')).toBe('an L.E.D.');
                expect(indefiniteArticle('LED')).toBe('a LED');
                expect(indefiniteArticle('LCD')).toBe('an LCD');
                expect(indefiniteArticle('lady in waiting')).toBe('a lady in waiting');
                expect(indefiniteArticle('leaf')).toBe('a leaf');
                expect(indefiniteArticle('M.I.A.')).toBe('an M.I.A.');
                expect(indefiniteArticle('MIASMA')).toBe('a MIASMA');
                expect(indefiniteArticle('MTV channel')).toBe('an MTV channel');
                expect(indefiniteArticle('Major General')).toBe('a Major General');
                expect(indefiniteArticle('N.C.O.')).toBe('an N.C.O.');
                expect(indefiniteArticle('NCO')).toBe('an NCO');
                expect(indefiniteArticle('NATO country')).toBe('a NATO country');
                expect(indefiniteArticle('note')).toBe('a note');
                expect(indefiniteArticle('O.K.')).toBe('an O.K.');
                expect(indefiniteArticle('OK')).toBe('an OK');
                expect(indefiniteArticle('OLE')).toBe('an OLE');
                expect(indefiniteArticle('octavo')).toBe('an octavo');
                expect(indefiniteArticle('octopus')).toBe('an octopus');
                expect(indefiniteArticle('okay')).toBe('an okay');
                expect(indefiniteArticle('once-and-future-king')).toBe('a once-and-future-king');
                expect(indefiniteArticle('oncologist')).toBe('an oncologist');
                expect(indefiniteArticle('one night stand')).toBe('a one night stand');
                expect(indefiniteArticle('onerous task')).toBe('an onerous task');
                expect(indefiniteArticle('opera')).toBe('an opera');
                expect(indefiniteArticle('optimum')).toBe('an optimum');
                expect(indefiniteArticle('opus')).toBe('an opus');
                expect(indefiniteArticle('ox')).toBe('an ox');
                expect(indefiniteArticle('Ph.D.')).toBe('a Ph.D.');
                expect(indefiniteArticle('PET')).toBe('a PET');
                expect(indefiniteArticle('P.E.T. scan')).toBe('a P.E.T. scan');
                expect(indefiniteArticle('plateau')).toBe('a plateau');
                expect(indefiniteArticle('quantum')).toBe('a quantum');
                expect(indefiniteArticle('R.S.V.P.')).toBe('an R.S.V.P.');
                expect(indefiniteArticle('RSVP')).toBe('an RSVP');
                expect(indefiniteArticle('REST')).toBe('a REST');
                expect(indefiniteArticle('reindeer')).toBe('a reindeer');
                expect(indefiniteArticle('S.O.S.')).toBe('an S.O.S.');
                expect(indefiniteArticle('SUM')).toBe('a SUM');
                expect(indefiniteArticle('SST')).toBe('an SST');
                expect(indefiniteArticle('salmon')).toBe('a salmon');
                expect(indefiniteArticle('T.N.T. bomb')).toBe('a T.N.T. bomb');
                expect(indefiniteArticle('TNT bomb')).toBe('a TNT bomb');
                expect(indefiniteArticle('TENT')).toBe('a TENT');
                expect(indefiniteArticle('thought')).toBe('a thought');
                expect(indefiniteArticle('tomato')).toBe('a tomato');
                expect(indefiniteArticle('U-boat')).toBe('a U-boat');
                expect(indefiniteArticle('UNESCO representative')).toBe('a UNESCO representative');
                expect(indefiniteArticle('U.F.O.')).toBe('a U.F.O.');
                expect(indefiniteArticle('UFO')).toBe('a UFO');
                expect(indefiniteArticle('UK citizen')).toBe('a UK citizen');
                expect(indefiniteArticle('ubiquity')).toBe('a ubiquity');
                expect(indefiniteArticle('unicorn')).toBe('a unicorn');
                expect(indefiniteArticle('unidentified flying object')).toBe('an unidentified flying object');
                expect(indefiniteArticle('uniform')).toBe('a uniform');
                expect(indefiniteArticle('unimodal system')).toBe('a unimodal system');
                expect(indefiniteArticle('unimpressive record')).toBe('an unimpressive record');
                expect(indefiniteArticle('uninformed opinion')).toBe('an uninformed opinion');
                expect(indefiniteArticle('uninvited guest')).toBe('an uninvited guest');
                expect(indefiniteArticle('union')).toBe('a union');
                expect(indefiniteArticle('uniplex')).toBe('a uniplex');
                expect(indefiniteArticle('uniprocessor')).toBe('a uniprocessor');
                expect(indefiniteArticle('unique opportunity')).toBe('a unique opportunity');
                expect(indefiniteArticle('unisex hairdresser')).toBe('a unisex hairdresser');
                expect(indefiniteArticle('unison')).toBe('a unison');
                expect(indefiniteArticle('unit')).toBe('a unit');
                expect(indefiniteArticle('unitarian')).toBe('a unitarian');
                expect(indefiniteArticle('united front')).toBe('a united front');
                expect(indefiniteArticle('unity')).toBe('a unity');
                expect(indefiniteArticle('univalent bond')).toBe('a univalent bond');
                expect(indefiniteArticle('univariate statistic')).toBe('a univariate statistic');
                expect(indefiniteArticle('universe')).toBe('a universe');
                expect(indefiniteArticle('unordered meal')).toBe('an unordered meal');
                expect(indefiniteArticle('uranium atom')).toBe('a uranium atom');
                expect(indefiniteArticle('urban myth')).toBe('an urban myth');
                expect(indefiniteArticle('urbane miss')).toBe('an urbane miss');
                expect(indefiniteArticle('urchin')).toBe('an urchin');
                expect(indefiniteArticle('urea detector')).toBe('a urea detector');
                expect(indefiniteArticle('urethane monomer')).toBe('a urethane monomer');
                expect(indefiniteArticle('urge')).toBe('an urge');
                expect(indefiniteArticle('urgency')).toBe('an urgency');
                expect(indefiniteArticle('urinal')).toBe('a urinal');
                expect(indefiniteArticle('urn')).toBe('an urn');
                expect(indefiniteArticle('usage')).toBe('a usage');
                expect(indefiniteArticle('use')).toBe('a use');
                expect(indefiniteArticle('usher')).toBe('an usher');
                expect(indefiniteArticle('usual suspect')).toBe('a usual suspect');
                expect(indefiniteArticle('usurer')).toBe('a usurer');
                expect(indefiniteArticle('usurper')).toBe('a usurper');
                expect(indefiniteArticle('utensil')).toBe('a utensil');
                expect(indefiniteArticle('utility')).toBe('a utility');
                expect(indefiniteArticle('utmost urgency')).toBe('an utmost urgency');
                expect(indefiniteArticle('utopia')).toBe('a utopia');
                expect(indefiniteArticle('utterance')).toBe('an utterance');
                expect(indefiniteArticle('V.I.P.')).toBe('a V.I.P.');
                expect(indefiniteArticle('VIPER')).toBe('a VIPER');
                expect(indefiniteArticle('viper')).toBe('a viper');
                expect(indefiniteArticle('X-ray')).toBe('an X-ray');
                expect(indefiniteArticle('X.O.')).toBe('an X.O.');
                expect(indefiniteArticle('XYLOPHONE')).toBe('a XYLOPHONE');
                expect(indefiniteArticle('XY chromosome')).toBe('an XY chromosome');
                expect(indefiniteArticle('xenophobe')).toBe('a xenophobe');
                expect(indefiniteArticle('Y-shaped pipe')).toBe('a Y-shaped pipe');
                expect(indefiniteArticle('Y.Z. plane')).toBe('a Y.Z. plane');
                expect(indefiniteArticle('YMCA')).toBe('a YMCA');
                expect(indefiniteArticle('YBLENT eye')).toBe('an YBLENT eye');
                expect(indefiniteArticle('yblent eye')).toBe('an yblent eye');
                expect(indefiniteArticle('yclad body')).toBe('an yclad body');
                expect(indefiniteArticle('yellowing')).toBe('a yellowing');
                expect(indefiniteArticle('yield')).toBe('a yield');
                expect(indefiniteArticle('youth')).toBe('a youth');
                expect(indefiniteArticle('youth')).toBe('a youth');
                expect(indefiniteArticle('ypsiliform junction')).toBe('an ypsiliform junction');
                expect(indefiniteArticle('yttrium atom')).toBe('an yttrium atom');
                expect(indefiniteArticle('zoo')).toBe('a zoo');
            }
        );

        test(
            'should support the only option',
            () => {
                expect(indefiniteArticle('boy', { only: true })).toBe('a');
                expect(indefiniteArticle('apple', { only: true })).toBe('an');
            }
        );

        test(
            'should should work with made up words',
            () => {
                expect(indefiniteArticle('aqk')).toBe('an aqk');
                expect(indefiniteArticle('qka')).toBe('a qka');
            }
        );
    }
);
