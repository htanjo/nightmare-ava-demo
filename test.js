import test from 'ava';
import Nightmare from 'nightmare';

const nightmare = Nightmare({ show: true });

test('test duckduckgo search results', async t => {
  const link = await nightmare
    .goto('https://duckduckgo.com')
    .type('#search_form_input_homepage', 'github nightmare')
    .click('#search_button_homepage')
    .wait('#zero_click_wrapper .c-info__title a')
    .evaluate(() => document.querySelector('#zero_click_wrapper .c-info__title a').href);
  t.is(link, 'https://github.com/segmentio/nightmare');
});
