// const express = require('express');
// const router = express.Router();
// const { getAllContacts } = require('../services/contacts');

// router.get('/contacts', async (req, res) => {
//   try {
//     const contacts = await getAllContacts();
//     res.status(200).json({
//       status: 200,
//       message: 'Successfully found contacts!',
//       data: contacts
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: 'Error fetching contacts',
//       error: error.message
//     });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const { getAllContacts, getContactById } = require('../services/contacts');

router.get('/contacts', async (req, res) => {
  try {
    const contacts = await getAllContacts();
    res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching contacts',
      error: error.message
    });
  }
});

router.get('/contacts/:contactId', async (req, res) => {
  const { contactId } = req.params;
  
  try {
    const contact = await getContactById(contactId);
    if (!contact) {
      return res.status(404).json({
        message: 'Contact not found'
      });
    }
    res.status(200).json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching contact',
      error: error.message
    });
  }
});

module.exports = router;