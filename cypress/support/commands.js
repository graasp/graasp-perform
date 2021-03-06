// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { COOKIE_KEYS } from '@graasp/utils';
import { CURRENT_USER, MEMBERS } from '../fixtures/members';
import {
  mockDefaultDownloadFile,
  mockGetChildren,
  mockGetCurrentMember,
  mockGetItem,
  mockGetItemTags,
  mockGetItemsTags,
  mockGetMemberBy,
  mockGetPublicItem,
  mockGetPublicChildren,
  mockPublicDefaultDownloadFile,
  mockSignOut,
  mockGetMembers,
  mockProfilePage,
  mockAuthPage,
} from './server';

Cypress.Commands.add(
  'setUpApi',
  ({
    items = [],
    members = Object.values(MEMBERS),
    currentMember = CURRENT_USER,
    storedSessions = [],
    getItemError = false,
    getMemberError = false,
    getCurrentMemberError = false,
  } = {}) => {
    const cachedItems = JSON.parse(JSON.stringify(items));
    const cachedMembers = JSON.parse(JSON.stringify(members));

    cy.setCookie(COOKIE_KEYS.SESSION_KEY, currentMember ? 'somecookie' : null);
    cy.setCookie(
      COOKIE_KEYS.STORED_SESSIONS_KEY,
      JSON.stringify(storedSessions),
    );

    mockGetItem(
      { items: cachedItems, currentMember },
      getItemError || getCurrentMemberError,
    );
    mockGetPublicItem({ items: cachedItems });

    mockGetItemTags(items, currentMember);

    mockGetItemsTags(items, currentMember);

    mockGetChildren(cachedItems, currentMember);
    mockGetPublicChildren(cachedItems);

    mockGetMemberBy(cachedMembers, getMemberError);

    mockGetCurrentMember(currentMember, getCurrentMemberError);

    mockDefaultDownloadFile({ items: cachedItems, currentMember });
    mockPublicDefaultDownloadFile(cachedItems);

    mockSignOut();

    mockGetMembers(cachedMembers);
    mockProfilePage();
    mockAuthPage();
  },
);
