import { buildMainPath } from '../../src/config/paths';
import { ITEM_WITHOUT_CHAT_BOX, ITEM_WITH_CHAT_BOX } from '../fixtures/items';
import {
  ITEM_CHATBOX_ID,
  ITEM_CHATBOX_BUTTON_ID,
  PANNEL_CLOSE_BUTTON_ID,
} from '../../src/config/selectors';
import { LOAD_CHATBOX_PAUSE } from '../fixtures/constants';

describe('Chatbox', () => {
  beforeEach(() => {
    cy.setUpApi({ items: [ITEM_WITH_CHAT_BOX, ITEM_WITHOUT_CHAT_BOX] });
  });

  it('Chatbox button should toggle chatbox visiblity', () => {
    cy.visit(buildMainPath({ rootId: ITEM_WITH_CHAT_BOX.id, id: null }));

    cy.get(`#${ITEM_CHATBOX_BUTTON_ID}`).should('exist');
    cy.get(`#${ITEM_CHATBOX_ID}`).should('not.exist');

    cy.get(`#${ITEM_CHATBOX_BUTTON_ID}`).click();

    cy.wait(LOAD_CHATBOX_PAUSE);

    cy.get(`#${ITEM_CHATBOX_ID}`).should('be.visible');
  });

  it('Side pannel button sould hide chatbox', () => {
    cy.visit(buildMainPath({ rootId: ITEM_WITH_CHAT_BOX.id, id: null }));

    cy.get(`#${ITEM_CHATBOX_BUTTON_ID}`).should('exist');
    cy.get(`#${ITEM_CHATBOX_ID}`).should('not.be.exist');

    cy.get(`#${ITEM_CHATBOX_BUTTON_ID}`).click();

    cy.wait(LOAD_CHATBOX_PAUSE);
    cy.get(`#${ITEM_CHATBOX_ID}`).should('be.visible');

    cy.get(`#${PANNEL_CLOSE_BUTTON_ID}`).click();
    cy.get(`#${ITEM_CHATBOX_ID}`).should('not.exist');
  });

  it('Disabled chatbox should not have button', () => {
    cy.visit(buildMainPath({ rootId: ITEM_WITHOUT_CHAT_BOX.id, id: null }));

    cy.get(`#${ITEM_CHATBOX_BUTTON_ID}`).should('not.exist');
    cy.get(`#${ITEM_CHATBOX_ID}`).should('not.exist');
  });
});
